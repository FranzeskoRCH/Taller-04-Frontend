import { Link } from 'react-router-dom'

export default function NotFoundView() {
  return (
    <section className="content-view not-found-view">
      <p className="eyebrow">Error 404</p>
      <h1>Esta página no existe</h1>
      <p>Puede que el enlace esté incompleto o que la página haya cambiado de lugar.</p>
      <Link className="primary-link" to="/">Volver al inicio</Link>
    </section>
  )
}
