import React, { useState, useEffect } from 'react'
import { preguntasSemana5 } from '../data/preguntasSemana5'

const obtenerPreguntasAleatorias = (preguntas, cantidad) => {
  const mezcladas = [...preguntas].sort(() => Math.random() - 0.5)
  return mezcladas.slice(0, cantidad)
}

const Quiz5 = () => {
  const [preguntas, setPreguntas] = useState([])
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultados, setMostrarResultados] = useState(false)
  const [puntaje, setPuntaje] = useState(0)

  useEffect(() => {
    const preguntasAleatorias = obtenerPreguntasAleatorias(preguntasSemana5, 10)
    setPreguntas(preguntasAleatorias)
  }, [])

  const manejarRespuesta = (opcion) => {
    setRespuestas({ ...respuestas, [preguntaActual]: opcion })
  }

  const siguientePregunta = () => {
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1)
    } else {
      calcularResultados()
    }
  }

  const calcularResultados = () => {
    let puntos = 0
    preguntas.forEach((pregunta, index) => {
      if (respuestas[index] === pregunta.respuestaCorrecta) {
        puntos++
      }
    })
    setPuntaje(puntos)
    setMostrarResultados(true)
  }

  const reiniciarQuiz = () => {
    setPreguntas(obtenerPreguntasAleatorias(preguntasSemana5, 10))
    setRespuestas({})
    setPreguntaActual(0)
    setPuntaje(0)
    setMostrarResultados(false)
  }

  const pregunta = preguntas[preguntaActual]

  return (
    <div className="quiz-preguntas">
      {!mostrarResultados && pregunta && (
        <>
          <p><strong>{preguntaActual + 1}. {pregunta.pregunta}</strong></p>
          {pregunta.opciones.map((opcion, i) => (
            <label key={i} style={{ display: 'block', margin: '0.5rem 0' }}>
              <input
                type="radio"
                name={`pregunta-${preguntaActual}`}
                value={opcion}
                checked={respuestas[preguntaActual] === opcion}
                onChange={() => manejarRespuesta(opcion)}
              />
              {opcion}
            </label>
          ))}

          <button
            className="empezar-btn"
            onClick={siguientePregunta}
            disabled={respuestas[preguntaActual] == null}
            style={{ marginTop: '1rem' }}
          >
            {preguntaActual === preguntas.length - 1 ? 'Finalizar' : 'Siguiente'}
          </button>
        </>
      )}

      {mostrarResultados && (
        <div>
          <h3>✅ Puntaje final: {puntaje} / {preguntas.length}</h3>
          <h4>🔍 Recomendaciones:</h4>
          <ul>
            {preguntas.map((pregunta, index) => {
              if (respuestas[index] !== pregunta.respuestaCorrecta) {
                return (
                  <li key={index}>
                    ❌ Pregunta: "{pregunta.pregunta}" → Respuesta correcta: "{pregunta.respuestaCorrecta}"
                  </li>
                )
              }
              return null
            }).filter(Boolean)}
          </ul>
          <button onClick={reiniciarQuiz} className="empezar-btn" style={{ marginTop: '1rem' }}>
            Volver a intentar
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz5
