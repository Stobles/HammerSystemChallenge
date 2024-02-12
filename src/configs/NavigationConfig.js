import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  SettingOutlined,
  TabletOutlined,
  FundOutlined,
  MailOutlined,
  TeamOutlined,
  GiftOutlined,
  ShopOutlined,
  FileImageOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "dashboard",
    path: `${APP_PREFIX_PATH}/dashboard`,
    title: "Основные",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "home",
        path: `${APP_PREFIX_PATH}/dashboard/home`,
        title: "Дашборд",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "catalog",
        path: `${APP_PREFIX_PATH}/dashboard/catalog`,
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "catalog-products",
            path: `${APP_PREFIX_PATH}/dashboard/catalog/products`,
            title: "Товары",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "catalog-categories",
            path: `${APP_PREFIX_PATH}/dashboard/catalog/categories`,
            title: "Категории",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "catalog-collections",
            path: `${APP_PREFIX_PATH}/dashboard/catalog/collections`,
            title: "Коллекции",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "orders",
        path: `${APP_PREFIX_PATH}/dashboard/orders`,
        title: "Заказы",
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "clients",
        path: `${APP_PREFIX_PATH}/dashboard/clients`,
        title: "Клиенты",
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "clients-list",
            path: `${APP_PREFIX_PATH}/dashboard/clients/user-list`,
            title: "Список клиентов",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "clients-group",
            path: `${APP_PREFIX_PATH}/dashboard/clients/group`,
            title: "Группы клиентов",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "banners",
        path: `${APP_PREFIX_PATH}/dashboard/banners`,
        title: "Баннеры",
        icon: FileImageOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "promo",
        path: `${APP_PREFIX_PATH}/dashboard/promo`,
        title: "Промокоды",
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "store",
        path: `${APP_PREFIX_PATH}/dashboard/store`,
        title: "Оффлайн точки",
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "store-addresses",
            path: `${APP_PREFIX_PATH}/dashboard/store/addresses`,
            title: "Адреса",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "store-geozone",
            path: `${APP_PREFIX_PATH}/dashboard/store/group`,
            title: "Группы клиентов",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "team",
        path: `${APP_PREFIX_PATH}/dashboard/team`,
        title: "Сотрудники",
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "mail",
        path: `${APP_PREFIX_PATH}/dashboard/mail`,
        title: "Рассылки",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemNavTree = [
  {
    key: "system",
    path: "",
    title: "Системные",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "system-settings",
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: "Настройки",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: "system-app",
        path: `${APP_PREFIX_PATH}/system/app`,
        title: "Мобильное приложение",
        icon: TabletOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: "system-logs",
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: "Логи",
        icon: FundOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...systemNavTree];

export default navigationConfig;
