import React from "react";
import styles from "./assets/scss/Emaillist.scss";
import Email from "./Email";
import PropTypes from "prop-types";

export default function Emaillist({ emails, callback }) {
  const notifyEmailDelete = (no) => {
    callback(no);
  };

  return (
    <ul className={styles.Emaillist}>
      {emails.map((email) => (
        <Email
          key={email.no}
          no={email.no}
          firstName={email.firstName}
          lastName={email.lastName}
          email={email.email}
          callback={notifyEmailDelete}
        />
      ))}
    </ul>
  );
}

Emaillist.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.shape(Email.propType)),
};
