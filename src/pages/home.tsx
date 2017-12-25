import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

interface model {
    count: number
}

interface PropsType {
    todos: any[],
    dispatch: (action: AnyAction) => {}
}
interface StateType {
    todo: model
}

class Home extends React.Component<PropsType, StateType> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        const { todos } = this.props;
        return (
            <div>
                <input type="text" onKeyUp={this.handleInputKeyUp.bind(this)} />
                <p>todo list:</p>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo.title}</li>
                    ))}
                </ul>
            </div>
        )
    }

    handleInputKeyUp(e: any) {
        const { dispatch } = this.props;
        const inputValue = e.currentTarget.value;
        if (e.which === 13 && inputValue) {
            dispatch({ type: 'TODO_ADD_ONE', payload: inputValue })
        }
    }
}

const mapStateToProps = (state: any) => {
    return { todos: state.todos, dispatch: state.dispatch }
}

export default connect(mapStateToProps)(Home);
