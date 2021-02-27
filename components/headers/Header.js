import Link from 'next/link';
import Image from 'next/image';
import {
  defaultImages,
  languageListProperties,
} from '../../constant/listedObject';
import HeaderStyle from './header.module.css';
import {useRouter} from 'next/router'

export const Header = () => {
  const router = useRouter()

  return (
    <nav className={HeaderStyle.navbarContainer}>
      <div className={HeaderStyle.mainNav}>
        <div className={HeaderStyle.logoContainer}>
          <Link href="/">
            <img
              src={defaultImages.logo.imgPath}
              alt={defaultImages.logo.imgAlt}
              className={HeaderStyle.imageSize}
            />
          </Link>
        </div>
        <ul className={HeaderStyle.navbarList}>
          {
            languageListProperties.map((lang, index) => (
              <Link href={router.asPath} locale={lang.locale}>
              <li 
                className={HeaderStyle.navbarListItems}
                key={index}
              >
                <button>
                  <Image
                    src={lang.imgPath}
                    alt={lang.imgAlt}
                    width="50"
                    height="50"
                    className={HeaderStyle.listFLagsSize}
                  />
                  <a>({lang.language})</a> 
                </button>
              </li>
              </Link>
              )
            )
          }
        </ul>
      </div>
    </nav>
  );
};
