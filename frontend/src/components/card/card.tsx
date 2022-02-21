import * as React from "react";
import styles from "./card.module.css";
import { ReactComponent as AirSvg } from "../../assets/Svg/air.svg";

interface Props {
  siteName: string;
  windSpeed: number;
  temperature: number;
  activePower: number;
  maxPower: number;
  stEvent: number;
  waEvent: number;
  avEvent: number;
  ncEvent: number;
}

const Card: React.FC<Props> = ({
  siteName,
  windSpeed,
  temperature,
  activePower,
  maxPower,
  stEvent,
  waEvent,
  avEvent,
  ncEvent,
}: Props) => {
  const getPercentage = (firstNumber: number, secondNumber: number) => {
    let percentage;
    percentage = (firstNumber / secondNumber) * 100;
    return `${percentage}%`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.leftSection}>
        <h3 className={styles.title}>{siteName}</h3>
        <div className={styles.contentWrapper}>
          <AirSvg /> <span className={styles.windSpeed}>{windSpeed} m/s</span>
          <span className={styles.temperature}>{temperature} °C</span>
        </div>
        <div className={styles.contentWrapper}>
          <span className={styles.powerTxt}>Active Power: </span>
          <span className={styles.activePower}>{activePower} </span>
          <span className={styles.maxPower}> / {maxPower} MW </span>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.progressBar}>
            <div
              className={styles.percentageBar}
              style={{ width: getPercentage(activePower, maxPower) }}
            ></div>
            <div className={styles.percentageNo}>
              {getPercentage(activePower, maxPower)}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={`${styles.eventBox} ${styles.redBox}`}>
          <span>ST</span>
          <span>{stEvent}</span>
        </div>
        <div className={`${styles.eventBox} ${styles.yellowBox}`}>
          <span>WA</span>
          <span>{waEvent}</span>
        </div>
        <div className={`${styles.eventBox} ${styles.greenBox}`}>
          <span>AV</span>
          <span>{avEvent}</span>
        </div>
        <div className={`${styles.eventBox} ${styles.greyBox}`}>
          <span>NV</span>
          <span>{ncEvent}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
