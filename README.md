Приложение состоит из двуз модулей: **серверной** и **клиентской** частей. Для написания серверной части использовал **nodejs**, а для клиента - **react**.<br/>
## Ссылка на приложение: 
https://b1client.onrender.com/ <br/>

## Функционал приложения:
- **Загрузку данных из csv-файла в СУБД через web-интерфейс**<br/>
выбор и предпросмотр файла осуществляется через **import CSV**, а загрузка данных в СУБД при помощи кнопки **Post Data** в выбранную пользователем таблицу.
<img width="700" alt="image" src="https://github.com/ImanSheyma/b1-test/assets/117591613/6dc06559-9c67-48da-9185-ffe5acd7c607">
<img width="901" alt="image" src="https://github.com/ImanSheyma/b1-test/assets/117591613/1277529b-4675-4cb3-8c5b-05167e33ca4b">

- **Отображение данных из СУБД по визуальной аналогии с csv-файлом (в виде
таблицы).**<br/>
при нажатии на кнопку **fetch data** отображаются записи выбранной таблицы (user или department) из бд.
<img width="874" alt="image" src="https://github.com/ImanSheyma/b1-test/assets/117591613/77da783b-16fd-4c3e-aa44-afb94b838c58">

- **Cохранение данных с web-сервера в файл**<br/>
  при помощи кнопки **export** можно сохранить данные, которые у пользователя отображены в таблице.
  <img width="871" alt="image" src="https://github.com/ImanSheyma/b1-test/assets/117591613/936db131-f079-4405-94d1-cfb65313dea3">

