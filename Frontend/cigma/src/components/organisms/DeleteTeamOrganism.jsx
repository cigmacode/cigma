import React, { useState } from "react";
import styles from "../../styles/organisms/DeleteTeamOrganism.module.scss";
import { deleteTeam } from "../../api/team";
import ButtonAtom from "../atoms/ButtonAtom";
import { useSelector } from "react-redux";

//const deleteTeam = async (token, teamIdx)
function DeleteTeamOrganism({ closeModal, teamIdx }) {
  // const [inputValue, setInputValue] = useState("");
  // usertoken
  const userToken = useSelector((store) => store.userToken);
  // api 호출
  const makeTeamRemoved = async () => {
    const { status } = await deleteTeam(userToken, teamIdx);
    if (status === 200) {
      // 삭제
    }
  };
  return (
    <div className={styles.app}>
      <div className={styles.title}>팀 삭제 이후 복구가 불가합니다.</div>
      <div className={styles.buttonWrapper}>
        <ButtonAtom
          onClick={() => {
            makeTeamRemoved();
          }}
          buttonName={"네"}
          style={{ color: "#fefefe", width: "30%" }}
        />
        <ButtonAtom
          onClick={closeModal}
          buttonName={"아니오"}
          style={{ color: "#fefefe", width: "30%" }}
        />
      </div>
    </div>
  );
}

export default DeleteTeamOrganism;