import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import styles from "./CardList.module.scss";

const CardList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch();
  }, []);

  return <ul className={styles.card_list}></ul>;
};

export default CardList;
