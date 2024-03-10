import classNames from "classnames";
import pic1 from "./../../images/pic-heart.svg"
import pic2 from "./../../images/pic-human.svg"
import pic3 from "./../../images/pic_hz.svg"


export default function Modal2({show, onClose}) {
    const modalClass = classNames({
        "modal": true,
        'modal_opened': show
    })


    return (
        <>
            <section className={modalClass}>
                <div className="modal__wrapper">
                    <button className="modal__button"  onClick={onClose}>X</button>
                    <p className="modal__text modal__text_accent">Большинство пациентов с ХОБЛ столкнется с
                        обострениями: как
                        минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77%
                        пациентов<sup>1</sup>.
                    </p>
                    <p className="modal__text">В течение 5 лет после первого тяжёлого обострения в живых остаются только
                        40%
                        пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с таковым при сердечной
                        недостаточности,
                        инфаркте миокарда и некоторых злокачественных опухолях.</p>
                    <p className="modal__title">Пятилетняя выживаемость пациентов</p>
                    <ul className="cards3">
                        <li className="cards3__card">
                            <img className="cards3__pic" src={pic1} alt="Иконка сердце"/>
                            <p className="cards3__num">45,5%</p>
                            <p className="cards3__title">пациентов с <span className="cards3__title_accent"> сердечной недостаточностью</span><sup>1</sup>
                            </p>
                            <p className="cards3__text">Популяционное когортное исследование (N=385)</p>
                        </li>
                        <li className="cards3__card">
                            <img className="cards3__pic" src={pic2} alt="Иконка человек"/>
                            <p className="cards3__num">55,3%</p>
                            <p className="cards3__title">пациентов с <span className="cards3__title_accent"> инфарктом миокарда</span><sup>1</sup>
                            </p>
                            <p className="cards3__text">Апостериорный анализ когортного исследования (N=2887)</p>
                        </li>
                        <li className="cards3__card">
                            <img className="cards3__pic" src={pic3} alt="Иконка мочевой пузырь"/>
                            <p className="cards3__num">50,5%</p>
                            <p className="cards3__title">пациентов с <span className="cards3__title_accent"> раком мочевого пузыря</span><sup>1</sup>
                            </p>
                            <p className="cards3__text">Исследование Национальной статистической службы (N=42642)</p>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    );
}