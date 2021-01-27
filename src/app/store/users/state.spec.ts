// import { Store } from '@ngrx/store';
// import { UserState } from './state';
// it('should return call the todoListSelectorFn', () => {
//     const store = jasmine.createSpyObj<Store<UserState>>('store', ['select']);
//     export const selectedUsers = createSelector(userState, (state: UserState) => state.users);

//     const userListSelector = new TodoListSelector(store);
//     selectedUsers.getTodoList();

//     expect(store.select).toHaveBeenCalledWith(todoListSelectorFn);
// });