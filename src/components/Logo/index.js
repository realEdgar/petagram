import React from 'react'
import { Svg, Header } from './styles'
import { Timer } from '../Timer/index.js'
import { Link } from '@reach/router'

export function Logo (props) {
  return (
    <Header>
      <Link to='/'>
        <Svg
          width={439.815}
          height={122.021}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='30.093 13.989 439.815 122.021'
          style={{
            background: '0 0'
          }}
          preserveAspectRatio='xMidYMid'
          {...props}
        >
          <defs>
            <linearGradient
              id='prefix__editing-gradow-gradient'
              x1={0}
              x2={1}
              y1={0.5}
              y2={0.5}
              gradientUnits='objectBoundingBox'
            >
              <stop offset={0} stopColor='#d51bd5' />
              <stop offset={1} stopColor='#039c9c' />
            </linearGradient>
            <filter
              id='prefix__editing-gradow-filter'
              x='-100%'
              y='-100%'
              width='300%'
              height='300%'
            >
              <feFlood floodColor='#fff' result='flood' />
              <feComposite
                operator='in'
                in2='SourceAlpha'
                in='flood'
                result='shadow'
              />
              <feOffset dx={-4} dy={-4} in='SourceGraphic' result='offset-1' />
              <feOffset dx={4} dy={4} in='shadow' result='offset-2' />
              <feMerge>
                <feMergeNode in='offset-2' />
                <feMergeNode in='offset-1' />
              </feMerge>
            </filter>
          </defs>
          <g filter='url(#prefix__editing-gradow-filter)'>
            <path
              d='M26.11-42.69q15.68 0 15.68 11.07 0 6.08-3.9 9.73-3.84 3.65-10.56 3.65-3.14 0-5.57-1.79-1.15-.77-1.92-1.79 4.67 0 7.14-2.85 2.46-2.85 2.46-8.42t-5.5-5.57H22.4q-.38 0-.7.07L14.34 0H.45l7.87-41.92q6.85-.64 10.82-.7 3.96-.07 6.97-.07zm41.92 31.87q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.52 2.11-4.41 0-7-.96-2.6-.96-4.32-2.75-3.4-3.39-3.4-9.6 0-9.67 5.25-15.55 5.63-6.34 15.43-6.34 6.08 0 9.08 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07 1.32 1.12 3.75 1.12 2.43 0 5.02-1.12 2.59-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.16-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zM77.18-6.4q0-1.73.9-6.08l3.39-17.28H77.7l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.26 17.28q-.84 3.97-.84 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.26 0-5.12-2.05-1.86-2.05-1.86-5.63zm24.61 4.48q-1.5-1.66-2.17-4.29-.68-2.62-.68-6.91t1.48-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.09 1.02-2.91 0-5.28-.77-2.36-.77-3.87-2.43zM115.3-27.9q-.74 1.15-1.38 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.56-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.35-1.15-2.91-1.15-1.57 0-2.5.51-.93.51-1.66 1.67zm28.19 1.15q2.17-3.07 5.47-5.12 3.3-2.05 7.33-2.05t5.95 1.28l12.54-1.28-4.35 24.58q-2.24 12.54-6.97 17.47-4.55 4.67-13.38 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.98-4.13 1.99-1.51 5.06-1.51 2.69 0 4.74 1.22 1.21.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.28 0 6.72-10.11.7-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.55 0-7.17-2.17-2.62-2.18-2.62-7.3 0-3.2 1.08-6.81 1.09-3.62 3.27-6.69zm8.32 13.69q0 4.36 2.24 4.36 1.53 0 3.01-1.67 1.15-1.34 1.6-3.33l3.26-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.91 0-6.21 6.4-1.79 4.99-1.79 11.13zm45.5-4.92q2.31-4.1 2.31-8.26 0-2.75-1.99-2.75-1.53 0-3.13 2.62-1.67 2.63-2.18 6.02L188.99 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.14-6.46 10.18-6.46 3.71 0 5.72 1.92 2.02 1.92 2.02 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.69-.76zm16.1 16.06q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.51-5.89 14.59-5.89 3.27 0 5.64 1.09l10.94-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.49.51q-.93.51-1.67 1.67zM296.9 1.28q-7.75 0-7.75-6.02 0-2.62 1.12-7.71t1.51-7.13q.89-4.68.89-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.53 2.2-2.24 6.62L280.9 0l-12.48 1.28 3.45-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.17-2.94-1.48 0-3.08 2.17-1.6 2.18-2.49 6.66L261.82 0l-12.6 1.28 6.72-33.92 10.43-1.28-1.09 6.46q1.66-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.54 1.34 1.79 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.79-1.31 6.21-1.31t5.12.74q1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.9 4.1-.9 5.6t.87 2.4q.86.9 2.14 1.02-.64 2.18-2.85 3.46-2.2 1.28-5.08 1.28z'
              fill='url(#prefix__editing-gradow-gradient)'
              transform='translate(97.36 102.737)'
            />
          </g>
          <style />
        </Svg>
      </Link>
      <Timer />
    </Header>
  )
}
