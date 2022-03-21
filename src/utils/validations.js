export default ({ isAuth,values,errors }) => {
  const rules = {

    email: value => {
      if (!value) {
          errors.email = 'Введите E-Mail';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
            value
          )
        ) {
          errors.email = 'Неверный E-Mail';
        }
        },
    password: value => {
    if(!value){
      errors.password = 'Введите пароль'
    }
    // if (!isAuth && !/(?=.*[0-9])[a-zA-Z!@#$%^&*]{4,}/i.test(value)) {
    // errors.password = "Слижком легкий пароль"
    //     }
    //   },
  },
    password2: value => {
        if(!isAuth && value !== values.password){
          errors.password2 = 'Пароли не совпадают'
        }
        if(!value) {
        errors.password2 = 'Введите пароль';
        }
        
          },
      fullname: value => {
        if(!isAuth && !value){
          errors.fullname = 'Укажите свое имя и фамилию'
        }
      }
    }

  Object.keys(values).forEach( key => rules[key] && rules[key](values[key],errors))
}

