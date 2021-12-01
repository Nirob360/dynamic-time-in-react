const date = new Date();
const hour = date.getHours();


  <span>
                    {hour >= 12 ? (hour >= 16 ? 'Good Evening' : 'Good AfterNoon') : 'Good Morning'}
                    ,
                </span>