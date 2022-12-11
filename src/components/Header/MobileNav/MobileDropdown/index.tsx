import { Link } from 'react-router-dom';
import './styles.scss';

function MobileDropdown() {
  return (
    <li className="navMobile__dropdown ">
      <span className="navMobile__dropbtn">Bricolage</span>
      <div className="navMobile__dropdown--content ">
        <Link className="navMobile__dropdown--link" to="#">
          Link 1
        </Link>
        <Link className="navMobile__dropdown--link" to="#">
          Link 2
        </Link>
        <Link className="navMobile__dropdown--link" to="#">
          Link 3
        </Link>
      </div>
    </li>
  );
}
{
  /* <div className="mobileNav__categorie--dropdown">
<label
  htmlFor="touch"
  className="mobileNav__label mobileNav__links--link"
>
  <span className="mobileNav__categorie--span">Catégorie</span>
</label>
<input type="checkbox" id="touch"></input>
<ul className="mobileNav__links__categorie--links slide">
  <Link className="mobileNav__links--link" to="#">
    sous-categorie
  </Link>
  <Link className="mobileNav__links--link" to="#">
    sous-categorie
  </Link>
  <Link className="mobileNav__links--link" to="#">
    sous-categorie
  </Link>
</ul>
</div> */
}
export default MobileDropdown;
