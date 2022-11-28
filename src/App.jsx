import { useEffect, useState } from 'react';
import styles from './index.css'

function App() {
  const [text, setText] = useState('')
  const [textDirty, setTextDirty] = useState(false)
  const [textError, setTextError] = useState("Поле ввода не должно быть пустым")
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (textError) {
      setFormValid(false)

    } else {
      setFormValid(true)
    }
  }, [textError])

  const changeHandler = (e) => {
    setText(e.target.value)
  }
  const blurHandler = (e) => {
    if (e.target.name === text) {
      setTextDirty(true)
    } else {
      setTextDirty(false)
    }
  }
  return (
    <div>
      <form action="">
        <input onBlur={e => blurHandler(e)} type="text" value={text} onChange={changeHandler} placeholder="Введите значение" />
        <button disabled={!formValid} type="submit">Отправить</button>
        {(textDirty && textError) && <div style={{ color: 'red', marginTop: '10px' }}> <i>{textError}</i></div>}
      </form>
    </div>
  );
}

export default App;
