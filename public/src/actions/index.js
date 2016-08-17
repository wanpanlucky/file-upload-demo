import request from 'superagent';

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const requestTodos = ()=> {
  return {
    type: REQUEST_TODOS
  }
};

export const receiveTodos = (todos)=> {
  return {
    type: RECEIVE_TODOS,
    data: todos
  }
};

export const fetchTodos = ()=> {
  return (dispatch)=> {
    dispatch(requestTodos());
    request.get('/todos')
        .end((err, res)=> {
          dispatch(receiveTodos(res.body));
        });
  }
};