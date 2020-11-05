import React from "react";
import css from "./ErrorComponent.module.css";

const ErrorComponent = (props) => {
    return(
        <div className={css.error}>
            404
            <div className={css.error__text}>
                Данной страницы не существует
            </div>
            <a href="/" className={css.error__link}>
                Вернуться на главную страницу
            </a>
        </div>
    );
}

export default ErrorComponent;