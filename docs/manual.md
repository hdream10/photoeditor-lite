# Методика разработки мобильных приложений на React Native

**Цель:** Ознакомиться с методиками разработки мобильных приложений на React Native, изучить основные концепции, инструменты и подходы к созданию кроссплатформенных приложений. Получить практический опыт разработки на примере создания приложения для редактирования фотографий.

## 1. Введение

### 1.1. Что такое React Native?

React Native — это фреймворк для разработки мобильных приложений. Он позволяет создавать приложения для iOS и Android, используя JavaScript и React. Основное преимущество React Native заключается в том, что один код может работать на обеих платформах, что значительно ускоряет разработку и упрощает поддержку.

React Native компилирует JavaScript-код в нативные компоненты, что обеспечивает высокую производительность приложений. В отличие от веб-приложений, React Native использует нативные компоненты операционной системы, а не веб-представления. Это означает, что приложение выглядит и работает как нативное, но разрабатывается с использованием знакомых веб-технологий.

### 1.2. Способы разработки

Существует два основных подхода к разработке на React Native:

**1. С использованием Expo**

Expo — это набор инструментов и сервисов, построенных вокруг React Native, который упрощает разработку, тестирование и распространение приложений. Expo предоставляет готовые модули для работы с камерой, файловой системой, датчиками и другими возможностями устройства.

**Преимущества Expo:**

- Быстрый старт разработки
- Готовые модули для работы с устройством
- Упрощенный процесс сборки и деплоя
- Горячая перезагрузка из коробки
- Не требуется настройка нативного кода

**Недостатки Expo:**

- Ограниченный доступ к некоторым нативным API
- Больший размер приложения
- Зависимость от сервисов Expo

**2. Без Expo (React Native CLI)**

Разработка с использованием чистого React Native CLI дает полный контроль над нативным кодом и позволяет использовать любые библиотеки и API.

**Преимущества React Native CLI:**

- Полный доступ ко всем нативным возможностям
- Меньший размер приложения
- Больше гибкости в настройке

**Недостатки React Native CLI:**

- Требуется настройка нативного кода
- Более сложный процесс сборки
- Необходимы знания нативных языков (Java/Kotlin для Android, Swift/Objective-C для iOS)

Для начинающих разработчиков рекомендуется начинать с Expo, так как это упрощает процесс разработки и позволяет сосредоточиться на изучении React Native, а не на настройке окружения.

### 1.3. Преимущества React Native

- **Кроссплатформенность**: один код для iOS и Android
- **Быстрая разработка**: горячая перезагрузка (hot reload) позволяет видеть изменения в реальном времени
- **Большое сообщество**: множество библиотек и готовых решений
- **Производительность**: близкая к нативным приложениям
- **Доступ к нативным API**: работа с камерой, датчиками, файловой системой
- **Знакомый синтаксис**: для тех, кто знает React и JavaScript

## 2. Основные определения и понятия

### 2.1. Компонент

**Компонент** — это основная единица интерфейса в React Native. Компонент представляет собой функцию или класс, который возвращает описание того, как должен выглядеть интерфейс. Компоненты могут быть переиспользуемыми и вложенными друг в друга.

Компоненты в React Native используют JSX (JavaScript XML) — синтаксис, похожий на HTML, но для описания структуры интерфейса.

**Пример простого компонента:**

```typescript
import { View, Text } from "react-native";

const MyComponent = () => {
  return (
    <View>
      <Text>Привет, мир!</Text>
    </View>
  );
};

export default MyComponent;
```

### 2.2. Хук (Hook)

**Хук** — это специальная функция, которая позволяет использовать состояние и другие возможности React в функциональных компонентах. Хуки были введены в React 16.8 и позволяют использовать функциональные компоненты вместо классов.

**Основные хуки:**

- **`useState`** — для управления состоянием компонента. Позволяет хранить данные, которые могут изменяться, и при изменении автоматически перерисовывать компонент.

```typescript
const [count, setCount] = useState(0);
```

- **`useEffect`** — для выполнения побочных эффектов (загрузка данных, подписки, работа с таймерами). Выполняется после рендера компонента.

```typescript
useEffect(() => {
  // Код выполнится после рендера
  return () => {
    // Очистка (опционально)
  };
}, [dependencies]);
```

- **`useCallback`** — для мемоизации функций. Полезно для оптимизации производительности, когда функция передается как пропс дочернему компоненту.

```typescript
const handleClick = useCallback(() => {
  // Логика
}, [dependencies]);
```

- **`useMemo`** — для мемоизации вычислений. Позволяет кэшировать результат вычислений и пересчитывать только при изменении зависимостей.

```typescript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

### 2.3. Состояние (State)

**Состояние** — это данные компонента, которые могут изменяться со временем. При изменении состояния компонент автоматически перерисовывается. Состояние является "приватным" для компонента и может быть изменено только внутри этого компонента.

Состояние используется для хранения данных, которые могут изменяться в результате взаимодействия пользователя или других событий (например, загрузка данных с сервера).

### 2.4. Пропсы (Props)

**Пропсы** — это данные, передаваемые от родительского компонента к дочернему. Пропсы неизменяемы (immutable) в дочернем компоненте, то есть дочерний компонент не может изменять пропсы, полученные от родителя.

Пропсы используются для передачи данных и функций от родительского компонента к дочернему, что позволяет создавать переиспользуемые компоненты.

**Пример:**

```typescript
// Родительский компонент
const Parent = () => {
  const name = "Иван";
  return <Child userName={name} />;
};

// Дочерний компонент
const Child = ({ userName }) => {
  return <Text>Привет, {userName}!</Text>;
};
```

### 2.5. Навигация

**Навигация** — это система перехода между экранами приложения. В React Native используется библиотека React Navigation, которая предоставляет различные типы навигации:

- **Stack Navigator** — навигация по стеку (как история браузера)
- **Tab Navigator** — навигация по вкладкам
- **Drawer Navigator** — выдвижное боковое меню

Навигация позволяет пользователю перемещаться между различными экранами приложения, сохраняя историю переходов и обеспечивая плавные анимации.

### 2.6. Провайдер (Provider)

**Провайдер** — это компонент, который предоставляет контекст (данные и функции) всем дочерним компонентам. Провайдеры используются для передачи общих данных и функций через дерево компонентов без необходимости передавать их через пропсы на каждом уровне.

Провайдеры оборачивают часть приложения или все приложение и делают данные доступными для всех вложенных компонентов через специальный хук `useContext` или кастомные хуки.

**Примеры провайдеров:**

- `NavigationContainer` — обеспечивает работу навигации
- `PaperProvider` — предоставляет тему для UI-библиотеки
- `SafeAreaProvider` — обеспечивает работу с безопасными областями экрана

## 3. Структура проекта и конфигурационные файлы

### 3.1. Базовые файлы проекта

При создании проекта React Native с Expo создается следующая структура файлов:

```
project-name/
├── app.json              # Конфигурация Expo
├── package.json          # Зависимости и скрипты
├── babel.config.js       # Конфигурация Babel
├── index.ts              # Точка входа приложения
├── assets/               # Статические ресурсы (изображения, шрифты)
└── src/                  # Исходный код приложения
```

### 3.2. package.json

Файл `package.json` содержит метаданные проекта, список зависимостей и скрипты для запуска и сборки приложения.

**Основные разделы:**

- **`dependencies`** — зависимости, необходимые для работы приложения в продакшене
- **`devDependencies`** — зависимости, необходимые только для разработки
- **`scripts`** — команды для запуска различных задач

**Пример `package.json`:**

```json
{
  "name": "photoeditor-lite",
  "version": "1.0.0",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~54.0.9",
    "react": "19.1.0",
    "react-native": "0.81.4",
    "@react-navigation/native": "^7.1.17"
  }
}
```

**Основные команды:**

- `npm start` — запуск сервера разработки Expo
- `npm run android` — запуск на Android-эмуляторе или устройстве
- `npm run ios` — запуск на iOS-симуляторе или устройстве (только macOS)
- `npm install` — установка всех зависимостей

### 3.3. app.json

Файл `app.json` содержит конфигурацию Expo-приложения: название, версию, иконки, splash screen, разрешения и другие настройки.

**Основные параметры:**

- **`name`** — название приложения
- **`version`** — версия приложения
- **`icon`** — путь к иконке приложения
- **`splash`** — настройки splash screen
- **`android`** / **`ios`** — платформо-специфичные настройки
- **`permissions`** — список разрешений, которые запрашивает приложение

**Пример `app.json`:**

```json
{
  "expo": {
    "name": "PhotoEditor Lite",
    "version": "1.0.0",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash-icon.png",
      "backgroundColor": "#0C111F"
    },
    "android": {
      "permissions": ["CAMERA", "READ_MEDIA_IMAGES", "WRITE_EXTERNAL_STORAGE"]
    },
    "ios": {
      "infoPlist": {
        "NSCameraUsageDescription": "Приложению необходим доступ к камере",
        "NSPhotoLibraryUsageDescription": "Приложению необходим доступ к галерее"
      }
    }
  }
}
```

### 3.4. babel.config.js

Файл `babel.config.js` содержит конфигурацию Babel — транспайлера, который преобразует современный JavaScript/TypeScript в код, понятный для JavaScript-движка.

**Основные плагины:**

- **`babel-preset-expo`** — пресет для Expo
- **`babel-plugin-module-resolver`** — плагин для поддержки алиасов путей

**Пример `babel.config.js`:**

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          root: ["./src"],
          alias: {
            "@": "./src",
          },
        },
      ],
    ],
  };
};
```

### 3.5. index.ts

Файл `index.ts` (или `index.js`) является точкой входа приложения. Он регистрирует корневой компонент приложения.

**Пример `index.ts`:**

```typescript
import { registerRootComponent } from "expo";
import App from "./src/app/App";

registerRootComponent(App);
```

## 4. Работа с библиотеками и API устройства

### 4.1. Работа с камерой

Для работы с камерой в Expo используется библиотека `expo-camera`. Она предоставляет компонент `CameraView` для отображения камеры и методы для съемки фотографий.

**Установка:**

```bash
npm install expo-camera
```

**Основные возможности:**

- Отображение превью камеры
- Съемка фотографий
- Переключение между фронтальной и задней камерой
- Работа с разрешениями

**Важно:** Перед использованием камеры необходимо запросить разрешение у пользователя. Это делается с помощью хука `useCameraPermissions`, который возвращает текущий статус разрешения и функцию для его запроса.

**Пример использования:**

```typescript
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";

const CameraComponent = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const takePhoto = async () => {
    if (!cameraRef.current) return;

    const photo = await cameraRef.current.takePictureAsync();
    setPhotoUri(photo.uri);
  };

  if (!permission?.granted) {
    return <Button onPress={requestPermission} title="Разрешить камеру" />;
  }

  return (
    <CameraView ref={cameraRef}>
      <Button onPress={takePhoto} title="Сфотографировать" />
    </CameraView>
  );
};
```

### 4.2. Работа с медиа-библиотекой

Для сохранения фотографий в галерею устройства используется библиотека `expo-media-library`.

**Установка:**

```bash
npm install expo-media-library
```

**Основные методы:**

- `requestPermissionsAsync()` — запрос разрешения на доступ к медиа-библиотеке
- `saveToLibraryAsync(uri)` — сохранение файла в галерею

**Важно:** Перед сохранением файла в галерею необходимо запросить разрешение у пользователя. Это делается с помощью метода `requestPermissionsAsync()`, который возвращает статус разрешения.

**Пример использования:**

```typescript
import * as MediaLibrary from "expo-media-library";

const savePhoto = async (photoUri: string) => {
  const { status } = await MediaLibrary.requestPermissionsAsync();

  if (status !== "granted") {
    alert("Нет доступа к галерее");
    return;
  }

  await MediaLibrary.saveToLibraryAsync(photoUri);
  alert("Фото сохранено в галерею");
};
```

### 4.3. Работа с датчиками

Для работы с датчиками устройства (акселерометр, гироскоп, компас) используется библиотека `expo-sensors`.

**Установка:**

```bash
npm install expo-sensors
```

**Доступные датчики:**

- `Accelerometer` — акселерометр (ускорение по осям X, Y, Z)
- `Gyroscope` — гироскоп (угловая скорость)
- `Magnetometer` — магнитометр (магнитное поле)
- `Barometer` — барометр (атмосферное давление)

**Пример использования акселерометра:**

```typescript
import { Accelerometer } from "expo-sensors";
import { useState, useEffect } from "react";

const useAccelerometerPosition = () => {
  const [position, setPosition] = useState<
    | {
        x: number;
        y: number;
        z: number;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    // Установка интервала обновления (в миллисекундах)
    Accelerometer.setUpdateInterval(500);

    // Подписка на данные акселерометра
    const subscription = Accelerometer.addListener((data) => {
      setPosition(data);
    });

    // Очистка подписки при размонтировании компонента
    return () => {
      subscription.remove();
    };
  }, []);

  return position;
};
```

**Использование в компоненте:**

```typescript
const AccelerometerInfo = () => {
  const position = useAccelerometerPosition();

  if (!position) {
    return <Text>Загрузка данных...</Text>;
  }

  return (
    <View>
      <Text>X: {position.x.toFixed(2)}</Text>
      <Text>Y: {position.y.toFixed(2)}</Text>
      <Text>Z: {position.z.toFixed(2)}</Text>
    </View>
  );
};
```

### 4.4. Работа с базой данных SQLite

Для локального хранения данных используется `expo-sqlite` — обертка над SQLite базой данных.

**Установка:**

```bash
npm install expo-sqlite
```

**Основные операции:**

- Создание базы данных и таблиц
- Выполнение SQL-запросов (INSERT, SELECT, UPDATE, DELETE)
- Работа с транзакциями

**Пример создания репозитория:**

```typescript
import * as SQLite from "expo-sqlite";

class PhotoHistoryRepository {
  private db: SQLite.SQLiteDatabase;

  constructor(db: SQLite.SQLiteDatabase) {
    this.db = db;
  }

  async init() {
    await this.db.execAsync(`
      CREATE TABLE IF NOT EXISTS photos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uri TEXT NOT NULL,
        createdAt TEXT NOT NULL
      );
    `);
  }

  async add(uri: string) {
    const createdAt = new Date().toISOString();
    await this.db.runAsync(
      "INSERT INTO photos (uri, createdAt) VALUES (?, ?)",
      [uri, createdAt]
    );
  }

  async getAll() {
    const result = await this.db.getAllAsync(
      "SELECT * FROM photos ORDER BY createdAt DESC"
    );
    return result;
  }
}
```

### 4.5. Работа с векторной графикой

Для рисования векторной графики используется библиотека `react-native-svg`.

**Установка:**

```bash
npm install react-native-svg
```

**Основные компоненты:**

- `<Svg>` — контейнер для SVG-элементов
- `<Path>` — путь (линия, кривая)
- `<Circle>`, `<Rect>` — геометрические фигуры
- `<Text>` — текст

**Пример использования для рисования:**

```typescript
import { Svg, Path } from "react-native-svg";

const DrawingCanvas = ({ paths }: { paths: TPath[] }) => {
  return (
    <Svg>
      {paths.map((path, index) => {
        const pathData = path.points
          .map((point, pointIndex) => {
            const command = pointIndex === 0 ? "M" : "L";
            return `${command} ${point.x} ${point.y}`;
          })
          .join(" ");

        return (
          <Path
            key={index}
            d={pathData}
            stroke={path.color}
            strokeWidth={path.strokeWidth}
            fill="none"
          />
        );
      })}
    </Svg>
  );
};
```

### 4.6. Работа с навигацией

Для навигации между экранами используется библиотека `@react-navigation/native` и ее расширения.

**Установка:**

```bash
npm install @react-navigation/native @react-navigation/drawer
npm install react-native-gesture-handler react-native-reanimated
```

**Настройка навигации:**

```typescript
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Photos" component={PhotosScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
```

**Использование навигации в компонентах:**

```typescript
import { useNavigation } from "@react-navigation/native";

const MyComponent = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Photos");
  };

  return <Button onPress={handlePress} title="Перейти к фото" />;
};
```

## 5. Практический пример: создание фоторедактора

Рассмотрим на примере создания фоторедактора основные этапы разработки мобильного приложения на React Native.

### 5.1. Инициализация проекта

**Создание проекта с Expo:**

```bash
npx create-expo-app photoeditor-lite --template
cd photoeditor-lite
```

**Установка необходимых зависимостей:**

```bash
npm install expo-camera expo-media-library expo-sqlite
npm install @react-navigation/native @react-navigation/drawer
npm install react-native-svg react-native-view-shot
npm install react-native-paper react-native-vector-icons
```

### 5.2. Структура приложения

Для организации кода рекомендуется разделять приложение на логические модули:

```
src/
├── app/              # Инициализация приложения
│   ├── App.tsx       # Корневой компонент
│   └── Navigation/   # Настройка навигации
├── pages/            # Страницы приложения
│   ├── Home/         # Главная страница
│   └── MyPhotos/     # Страница с историей
├── features/         # Функциональные возможности
│   ├── DrawingEditor/ # Редактор рисования
│   └── PhotoHistory/  # История фотографий
└── shared/           # Переиспользуемые компоненты
    ├── ui/           # UI-компоненты
    └── theme/        # Тема приложения
```

### 5.3. Инициализация приложения

Корневой компонент `App.tsx` оборачивает приложение в необходимые провайдеры:

```typescript
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { theme } from "./shared/theme";
import { Navigation } from "./app/Navigation";

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
```

В данном случае используются следующие провайдеры:

- `PaperProvider` — предоставляет тему для UI-библиотеки
- `NavigationContainer` — обеспечивает работу навигации

### 5.4. Работа с камерой

Для работы с камерой используется компонент `CameraView` и метод `takePictureAsync()` для съемки фотографий. Логика съемки инкапсулируется в кастомный хук для переиспользования.

**Использование в компоненте:**

```typescript
const CameraScreen = () => {
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const takePhoto = async () => {
    if (!cameraRef.current) return;

    const photo = await cameraRef.current.takePictureAsync();
    setPhotoUri(photo.uri);
  };

  return (
    <View>
      <CameraView ref={cameraRef}>
        <Button onPress={takePhoto} title="Сфотографировать" />
      </CameraView>
      {photoUri && <Image source={{ uri: photoUri }} />}
    </View>
  );
};
```

### 5.5. Редактор рисования

Для создания редактора рисования используется библиотека `react-native-svg` для отображения векторной графики. Компонент холста отображает пути рисования, которые хранятся в состоянии компонента.

**Компонент холста:**

Компонент получает массив путей и отображает их с помощью SVG:

```typescript
import { Svg, Path } from "react-native-svg";

const DrawingCanvas = ({ paths }) => {
  return (
    <Svg>
      {paths.map((path, index) => (
        <Path
          key={index}
          d={path.pathData}
          stroke={path.color}
          strokeWidth={path.strokeWidth}
          fill="none"
        />
      ))}
    </Svg>
  );
};
```

Логика управления путями (добавление, удаление, отмена) реализуется через стандартные хуки `useState` и `useCallback`.

### 5.6. Сохранение фотографий

Для сохранения фотографий в галерею используется метод `saveToLibraryAsync()`. Перед сохранением необходимо запросить разрешение у пользователя:

```typescript
const savePhoto = async (photoUri: string) => {
  // Запрос разрешения
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== "granted") {
    alert("Нет доступа к галерее");
    return;
  }

  // Сохранение в галерею
  await MediaLibrary.saveToLibraryAsync(photoUri);
  alert("Фото сохранено в галерею");
};
```

### 5.7. Работа с базой данных

Для хранения истории фотографий создается репозиторий:

```typescript
class PhotoHistoryRepository {
  private db: SQLite.SQLiteDatabase;

  constructor(db: SQLite.SQLiteDatabase) {
    this.db = db;
  }

  async init() {
    await this.db.execAsync(`
      CREATE TABLE IF NOT EXISTS photos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uri TEXT NOT NULL,
        createdAt TEXT NOT NULL
      );
    `);
  }

  async add(uri: string) {
    const createdAt = new Date().toISOString();
    await this.db.runAsync(
      "INSERT INTO photos (uri, createdAt) VALUES (?, ?)",
      [uri, createdAt]
    );
  }

  async getAll() {
    return await this.db.getAllAsync(
      "SELECT * FROM photos ORDER BY createdAt DESC"
    );
  }
}
```

## 6. Деплой приложения

### 6.1. Подготовка к деплою

Перед публикацией приложения необходимо:

1. **Обновить версию** в `app.json`
2. **Настроить иконки и splash screen**
3. **Проверить разрешения** в `app.json`

### 6.2. Сборка приложения

Для сборки приложения используется EAS Build (Expo Application Services):

```bash
# Установка EAS CLI
npm install -g eas-cli

# Вход в аккаунт Expo
eas login

# Настройка проекта
eas build:configure

# Сборка APK для Android
eas build --platform android --profile preview

# Сборка для iOS (требуется Apple Developer аккаунт)
eas build --platform ios --profile preview
```

**Где найти собранные файлы:**

После успешной сборки EAS Build предоставляет ссылку для скачивания файла. Также можно скачать файл через веб-интерфейс Expo:

1. Перейдите на сайт [expo.dev](https://expo.dev)
2. Войдите в свой аккаунт
3. Выберите проект
4. Перейдите в раздел "Builds"
5. Найдите нужную сборку и скачайте файл

**Типы файлов:**

- **APK** (Android) — файл для установки на Android-устройства. Можно установить напрямую, включив "Установку из неизвестных источников" в настройках устройства.
- **AAB** (Android App Bundle) — формат для публикации в Google Play Store
- **IPA** (iOS) — файл для установки на iOS-устройства. Требует Apple Developer аккаунт и установку через TestFlight или App Store Connect

### 6.3. Публикация в магазины

После сборки приложения его можно опубликовать в Google Play Store или Apple App Store, следуя инструкциям соответствующих платформ.

## Заключение

Данная методика охватывает основные аспекты разработки мобильных приложений на React Native. Изучив материал, вы получите понимание:

- Основных концепций React Native
- Структуры проекта и конфигурационных файлов
- Работы с библиотеками для доступа к возможностям устройства
- Организации кода и создания переиспользуемых компонентов
- Процесса деплоя приложения

Для углубленного изучения рекомендуется ознакомиться с официальной документацией React Native, Expo и используемых библиотек.
