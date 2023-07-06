import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('should contain accessibility tags', () => {
        const { container } = render(<App />)

        // Check if the accessibility tags are present in the component
        expect(container.querySelector('nav')).toBeInTheDocument()
        expect(container.querySelector('header')).toBeInTheDocument()
        expect(container.querySelector('main')).toBeInTheDocument()
        expect(container.querySelector('footer')).toBeInTheDocument()
        expect(container.querySelector('section')).toBeInTheDocument()
    })
})
