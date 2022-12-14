import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/90d1d36a549da8a65648ff02ca9b2e7d~c5_100x100.jpeg?x-expires=1671156000&x-signature=aSxkc4qWWJWoizoKRiZ8o0ZUeec%3D" alt="Thùy Tiên" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Hoa hậu Thùy Tiên</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
     );
}

export default AccountItem;