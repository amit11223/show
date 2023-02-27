import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp,alarmOutline,cardOutline,videocamSharp,accessibilityOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  
  {
    title: 'רכישת רטיסים',
    url: '/page/purchase of tickets',
    iosIcon: cardOutline,
    mdIcon: cardOutline
  },
  
  {
    title: 'לוח הצגות',
    url: '/page/play schedule',
    iosIcon: videocamSharp,
    mdIcon: videocamSharp
  },
  {
    title: 'שחקנים',
    url: '/page/actors',
    iosIcon: accessibilityOutline,
    mdIcon: accessibilityOutline
  },
  {
    title: 'התנתקות',
    url: '/page/log out',
    iosIcon: warningOutline,
    mdIcon: warningOutline
  }
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

       
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
