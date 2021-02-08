import React, {Component} from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class TaskOnDocuments extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChangeText(event){

    }

    render() {
        return <div className="App">
            <div className="container form-container">
                <div className="row form-container__title">
                    <h1 className="col card-title">Формирование задачи на подготовку документов</h1>
                    <div className="button-close-container">
                        <button className="col btn button-close">
                            <i className="fas fa-times button-close-icon"/>
                        </button>
                    </div>
                </div>
                <div className="col-12 form__descr">
                    <div className="form__item">
                        <h5>
                            Задача от "дата задачи"
                        </h5>
                    </div>
                </div>
                <div className="radio-container row">
                    <div className="col-6">
                        <div className="checkbox-container">
                            <label>
                                <input className="checkbox" type="checkbox" value="Заключить NDA" onChange={this.handleChangeText}
                                /> Заключить NDA
                            </label>

                            <label>
                                <input className="checkbox" type="checkbox" value="Заключить рамочный договор" onChange={this.handleChangeText}
                                /> Заключить Рамочный договор
                            </label>

                            <label>
                                <input className="checkbox" type="checkbox"
                                       value="Заключить договор на конкретный проект" onChange={this.handleChangeText}
                                /> Заключить договор на конкретный проект
                            </label>

                            <label>
                                <input className="checkbox" type="checkbox" value="Подготовить набор документов"
                                /> Подготовить набор документов
                            </label>
                        </div>
                        <div className="checkbox-container">
                            <label>
                                <input className="radio" type="radio" name="optradio" value="C НДС" onChange={this.handleChangeText}
                                /> C НДС
                            </label>
                            <label>
                                <input className="radio" type="radio" name="optradio" value="Без НДС" onChange={this.handleChangeText}
                                /> Без НДС
                            </label>
                            <label>
                                <input className="radio" type="radio" name="optradio" value="Неизвестно" onChange={this.handleChangeText}
                                /> Неизвестно
                            </label>
                        </div>
                        <div className="file-select">
                            <label className="col-12">
                                <input type="file" className="form-control" placeholder="Выберите файл"/>
                            </label>
                            <div className="btn-add-file">
                                <label className="btn btn-outline-dark">
                                    <i className="fas fa-plus button-view-icon fa-lg"/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="file-container col-6">
                        <div className="file__item">
                            <label className="col-12">
                                <input type="text"
                                       className="form-control" placeholder="Подготовка документов для ..."/>
                            </label>
                        </div>
                        <div className="file__item col-12 form-group">
                        <textarea className="form-control"
                                  placeholder="Текст задачи"/>
                        </div>
                    </div>
                </div>
                <div className="form__submit-btn">
                    <input id="complete" value="Создать задачу для бухгалтерии"
                           type="submit"/>
                </div>
            </div>
        </div>
    }
}

export default TaskOnDocuments;