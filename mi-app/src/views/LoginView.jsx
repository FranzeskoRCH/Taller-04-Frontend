import { useState } from 'react'

export default function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const canSubmit = email.trim() !== '' && password !== '' && !submitted

  function handleSubmit(event) {
    event.preventDefault()
    if (canSubmit) setSubmitted(true)
  }

  return (
    <section className="login-wrap">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <p className="eyebrow">ReactAcademy</p>
        <h1>Bienvenido de nuevo</h1>
        <p className="login-intro">Ingresa tus datos para continuar aprendiendo.</p>
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" type="email" autoComplete="email" placeholder="tu@correo.com" value={email} onChange={event => setEmail(event.target.value)} disabled={submitted} />
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" autoComplete="current-password" placeholder="Tu contraseña" value={password} onChange={event => setPassword(event.target.value)} disabled={submitted} />
        <button type="submit" disabled={!canSubmit}>{submitted ? 'Enviado' : 'Iniciar sesión'}</button>
        <p className="login-note">Esta pantalla es una demostración: no valida tus datos ni inicia sesión.</p>
      </form>
    </section>
  )
}
