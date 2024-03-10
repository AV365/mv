import icoHuman from './../../images/ico-human.svg';
import icoArrow from './../../images/ico-arrow.svg';
import linesArrow from './../../images/lines-arrow.svg';

import './App.css';
import Modal1 from "../Modal1/Modal1";
import Modal2 from "../Modal2/Modal2";
import {useState} from "react";

function App() {

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);


    function handleOpenModal1() {
        setModal1(true);

    }
    function handleOpenModal2() {
        setModal2(true);

    }

    function handleCloseModal() {
        setModal1(false);
        setModal2(false);
    }

    return (
        <>
            <section class="header"></section>
            <main className="wrapper">
                <h2 className="title">ХОБЛ: мифы и реальность</h2>

                <section className="questions">
                    <div className="questions__card-wrapper">
                        <div className="questions__card">
                            <div className="questions__question-wrapper">
                                <img src={icoHuman} className="questions__marker" alt="Маркер" />
                                <div className="questions__question">ХОБЛ болеют <span
                                    className="questions__question_accent">преимущественно мужчины?</span>
                                </div>
                            </div>
                            <div className="questions__text">В десятилетнем исследовании «Генетическая эпидемиология
                                ХОБЛ»
                                (COPDGene)
                                среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...
                            </div>
                            <a href="#" className="question__button question__button_blue" onClick={handleOpenModal1}></a>
                        </div>
                        <div className="questions__card">
                            <div className="questions__question-wrapper">
                                <img src={icoArrow} className="questions__marker" alt="Маркер"/>
                                <div className="questions__question"><span
                                    className="questions__question_accent">Опасно</span> не наличие
                                    заболевания, а обострения?
                                </div>
                            </div>
                            <div className="questions__text">Большинство пациентов с ХОБЛ столкнется с обострениями: как
                                минимум
                                одно
                                среднетяжелое или тяжелое обострение случится в течение...
                            </div>
                            <a href="#" className="question__button question__button_green" onClick={handleOpenModal2}></a>
                        </div>
                    </div>
                </section>
                <h2 className="title">Терапия ХОБЛ: что в фокусе?</h2>
                <section className="focus">
                    <p className="text-accent">Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</p>
                    <p className="text-title">Приоритетные направления фармакотерапевтической стратегии при
                        ХОБЛ<sup>1</sup>:
                    </p>
                    <ul className="cards1">
                        <li className="cards1-card">
                            <div className="cards1-card__img">
                                <div className="cards1-card__marker">1</div>
                            </div>
                            <p className="cards1-card__title">Ингаляционный <span className="cards1-card__title_accent">антихолинергик</span></p>
                            <p className="cards1-card__text">Ингибирует бронхоконстрикторные эффекты ацетилхолина,
                                вступая с ним
                                в
                                конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами,
                                дополняет и
                                потенцирует эффект β2-агонистов1</p>
                        </li>
                        <li className="cards1-card">
                            <div className="cards1-card__img">
                                <div className="cards1-card__marker">2</div>
                            </div>
                            <p className="cards1-card__title">Ингаляционный                                <span className="cards1-card__title_accent">β2-агонист</span></p>
                            <p className="cards1-card__text">Вызывает бронходилатацию посредством релаксации
                                гладкомышечных
                                клеток
                                бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве
                                функциональных
                                антагонистов бронхоконстрикции</p>
                        </li>
                        <li className="cards1-card">
                            <div className="cards1-card__img">
                                <div className="cards1-card__marker">3</div>
                            </div>
                            <p className="cards1-card__title">Ингаляционный
                                <span className="cards1-card__title_accent"> глюкокортикостероид</span> (ИГКС)</p>
                            <p className="cards1-card__text">Снижает частоту обострений, особенно в сочетании с ДДБА,
                                подавляют
                                хроническое воспаление при астме и снижают гиперреактивность дыхательных путей</p>
                        </li>
                    </ul>
                    <div className="lines">
                        <div className="lines__item"><img src={linesArrow} className="lines__marker"
                                                          alt="Маркер" />
                        </div>
                        <div className="lines__item"><img src={linesArrow} className="lines__marker"
                                                          alt="Маркер" />
                        </div>
                    </div>
                    <ul className="cards2">
                        <li className="cards2__card"><p className="cards2__text">Пациентам с ХОБЛ рекомендуется
                            комбинирование
                            бронходилататоров с разными механизмами действия;</p>
                            <p className="cards2__text">Назначение 2-х бронходилататоров из группы длительнодействующих
                                β2-агонистов
                                (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и
                                усиливает
                                друг
                                друга<sup>1</sup>.</p></li>
                        <li className="cards2__card"><p className="cards2__text">Пациентам с ХОБЛ и частыми обострениями
                            (≥2
                            среднетяжелых
                            обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации)
                            рекомендуется
                            назначение
                            ИГКС в дополнение к ДДБА;</p>
                            <p className="cards2__text">Последние исследования показали, что амбулаторное применение
                                ИГКС/ДДБА у
                                пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами,
                                принимавшими только
                                ДДБА (8,1% vs 13,2%)<sup>1</sup>.</p></li>
                    </ul>
                </section>
            </main>
            <Modal1 show={modal1} onClose={handleCloseModal}/>
            <Modal2 show={modal2} onClose={handleCloseModal}/>
        </>

);
}

export default App;
