import React, { useState, useEffect, useContext } from 'react';
import { Wrapper, Header, Modal } from '../../componets/index';
import buscar from '../../assets/images/buscar.svg';
import styles from './styles.module.scss';
import Context from '../../context';
import { getStates, getCityByState } from '../../utils/get-data';

function Home() {
  const [openModal, setOpenModal] = useState();
  const {
    setStateApiIbge,
    stateApiIbge,
    cityApiIbge,
    setCityApiIbge,
    filterState,
  } = useContext(Context);

  const { container, textBox, search, btnSearch } = styles;

  useEffect(() => {
    if (openModal && !stateApiIbge) getStates(setStateApiIbge);
    if (filterState) getCityByState(setCityApiIbge, filterState);
  }, [openModal, filterState]);

  return (
    <Wrapper hasImage>
      <Header />
      <div className={container}>
        <div className={textBox}>
          <h1>
            Seu marketplace<br></br>de coleta de resíduos.
          </h1>
          <p>
            Ajudamos pessoas a encontrarem pontos <br></br>de coleta de forma
            eficiente.
          </p>
        </div>
        <div className={search} onClick={() => setOpenModal(true)}>
          <img src={buscar}></img>
          <span className={btnSearch}>Pesquisar pontos de coleta</span>
        </div>
      </div>
      {openModal && <Modal closeModal={() => setOpenModal(false)} />}
    </Wrapper>
  );
}

export default Home;
