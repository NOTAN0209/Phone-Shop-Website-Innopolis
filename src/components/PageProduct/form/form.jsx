import { useState } from 'react';
import './form.css';

let errorInitial = { name: null, rating: null }; 

function Form() {

    let [input, setInput] = useState(JSON.parse(localStorage.getItem('reviewFormInput')));
    let [error, setError] = useState({ errorInitial });
    localStorage.setItem('reviewFormInput', JSON.stringify(input));

    // console.log(input);

    function handleSubmit (event){
        event.preventDefault();

        if (input?.name.trim() === '') {
            setError({ ...error, name: 'Вы забыли указать имя и фамилию' });
            return;
        }

        let nameLength = input?.name.trim().length;

        if (nameLength <= 2) {
            setError({ ...error, name: 'Имя не может быть короче 2-х символов' });
            return;
        }

        let rating = +input?.rating;
        
        if (isNaN(rating) || rating < 1 || rating > 5) {
            setError({ ...error, rating: 'Оценка должна быть от 1 до 5' });
            return;
        }

        setInput({ name: "", rating: "", text: "" });
        console.log("Проверка завершена");
    };

     // Срабатывает при вводе имени
     let handleInputName = (event) => {
        setInput({ ...input, name: event.target.value });
    };

    // Срабатывает при фокусе на поле с именем
    let handleFocusName = () => {
        setError({ ...errorInitial })
    };

    // Срабатывает при вводе рейтинга 
    let handleInputRating = (event) => {
        setInput({ ...input, rating: event.target.value });
    };

    // Срабатывает при фокусе на поле с рейтингом
    let handleFocusRating = () => {
        setError({ ...errorInitial })
    }

    return (
        <form className="form" onSubmit={handleSubmit} >
            <fieldset className="formBorder">
                <legend className="formTitle">Добавить свой отзыв</legend>
                    <div className="formRow"> 
                    
                        <div className="inputNameColumn">
                            <input
                                 type="text"
                                 name="name"
                                 placeholder="Имя и фамилия"
                                 className="inputName"
                                 value={input?.name}
                                 onInput={handleInputName}
                                 onFocus={handleFocusName}
                                />
        
                            <div className={`mistakeNameVisible ${error.name ? '' : `mistakeName`}`}>{error.name}</div>
                        </div>

                        <div className="inputNumberColumn"> 
                            <input
                                type="number"
                                name="rating"
                                placeholder="Оценка"
                                className="inputNumber"
                                value={input?.rating}
                                onInput={handleInputRating}
                                onFocus={handleFocusRating}
                                />
                        
                            <div className={`mistakeNumberVisible ${error.rating ? '' : "mistakeNumber"}`}>{error.rating}</div>                                                                   
                        </div>                 
                 </div>
                          
                 <div clasName="inputText">
                        <input
                         type="textarea" 
                         name="text-review" 
                         placeholder="Текст отзыва"
                        className="inputReview" 
                        />
                            
                    </div>                    
                <button className="formButton" type = "submit">Отправить отзыв</button>
            </fieldset>
        </form>
        )
}

export default Form