import { inject } from '@angular/core';
import { Message } from '../models/message/message.model';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { MessagesService } from '../services/messages.service';
import { pipe, switchMap, tap } from 'rxjs';
import { CommandsService } from '../services/commands.service';
import { AuthorTypeEnum } from '../enums/author-type.enum';


type MessagesState = {
    messages: Message[];
    isLoading: boolean;
    sendingRequest: boolean;
}

const initialState: MessagesState = {
    messages: [],
    isLoading: false,
    sendingRequest: false
}

export const MessagesStore = signalStore(
    withState<MessagesState>(initialState),
    withMethods(
        (
            store,
            messagesService = inject(MessagesService),
            commandsService = inject(CommandsService)
        ) => ({
            add(message: Message): void {
                patchState(store, (state) => ({ messages: [...state.messages, message]}));

                if (message.author.type === AuthorTypeEnum.USER) {
                    this.getAnswer(message);
                }
            },
            getAnswer: rxMethod<Message>(
                pipe(
                    tap(() => patchState(store, { sendingRequest: true })),
                    switchMap((message: Message) => {
                        return commandsService.getCommandListInfo(message.text).pipe(
                            tapResponse({
                                next: (answer: string) => {
                                    const message = new Message({
                                        text: answer,
                                        author: {
                                            type: AuthorTypeEnum.CHATBOT,
                                        }
                                    })
                                    
                                    patchState(store, (state) => ({ messages: [...state.messages, message], sendingRequest: false}));
                                    localStorage.setItem('messages', JSON.stringify(store.messages()))
                                },
                                error: (err: any) => {
                                    patchState(store, { isLoading: false });
                                    console.error(err);
                                }
                            })
                        )
                    })
                )
            ),
            loadAll: rxMethod<void>(
                pipe(
                    tap(() => patchState(store, { isLoading: true })),
                    switchMap(() => {
                        return messagesService.getAll().pipe(
                            tapResponse({
                                next: (messages: Message[]) => patchState(store, { messages, isLoading: false }),
                                error: (err: any) => {
                                    patchState(store, { isLoading: false });
                                    console.error(err);
                                }
                            })
                        )
                    })
                )
            )
        })),
    withHooks({
        onInit({ loadAll }) {
            loadAll()
        }
    })
)