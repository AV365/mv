import classNames from 'classnames';
import img from './../../images/diag.svg'


export default function Modal1({show, onClose}) {


    const modalClass = classNames({
        "modal": true,
        'modal_opened': show
    })

    return (
        <>
            {JSON.stringify(show)}
            <section className={modalClass}>
                <div class="modal__wrapper">
                    <button class="modal__button" onClick={onClose}>X</button>
                    <p class="modal__text">В десятилетнем исследовании <span class="modal__text_accent">«Генетическая эпидемиология ХОБЛ» (COPDGene)</span>
                        среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено <span
                            class="modal__text_accent">преобладание женщин (66%)</span>
                        , а в возрасте 60-64 лет количество женщин и мужчин.</p>
                    <p class="modal__text">Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано
                        с тем, что
                        дыхательные пути курящих женщин имеют более <span
                            class="modal__text_accent">высокий процент площади стенок</span>, но меньшую площадь
                        просвета,
                        внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.</p>
                    <img class="modal__img" src={img}
                         alt="Эпидемиологическое распределение ХОБЛ среди мужчин и женщин, %"/>
                </div>
            </section>
        </>
    );
}