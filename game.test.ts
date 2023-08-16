const { it, describe, expect } = require('@jest/globals')
const { cards } = require('./components/cards')
const { coverCard } = require('./components/cards')

describe('should check the created array of cards with suits up', () => {
    it('array is not empty', () => {
        expect(cards).not.toBeNull()
    })

    it('array length 36', () => {
        expect(cards).toHaveLength(36)
    })
})

describe('should check the array of cards face down', () => {
    it('array is not empty', () => {
        expect(coverCard).not.toBeNull()
    })

    it('array length 36', () => {
        expect(coverCard).toHaveLength(36)
    })
    it('array includes string', () => {
        expect(coverCard).toContain(
            '<img src="./static/img/рубашка.png" class="cover-card" data-index="0">',
        )
    })
})
