import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

const TodoTable = ({todos, isLoading})=> {
  return (
      <div className="m-t-1">
        <table className="table">
          <thead className="thead-inverse">
          <tr>
            <th>#</th>
            <th>Content</th>
            <th>Completed</th>
          </tr>
          </thead>
          <tbody>
          {
            isLoading ? (
                <tr >
                  <td className="text-xs-center" colSpan="3">
                    <i className="m-t-1 fa fa-circle-o-notch fa-spin fa-5x fa-fw"></i>
                  </td>
                </tr>
            ) :
                todos.map((val, idx)=> (
                    <Todo
                        key={idx}
                        {...val}
                        idx={idx}
                    />
                ))
          }
          </tbody>
        </table>
      </div>

  )
};

const mapStateToProps = state=> state;

const Todos = connect(mapStateToProps)(TodoTable);

export default Todos;
