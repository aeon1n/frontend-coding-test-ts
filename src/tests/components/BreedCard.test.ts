import BreedCard from '@/components/layout/BreedCard.vue'
import { mount, RouterLinkStub, VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

const mocks = {
  $route: {
    path: '/',
  },
}

const props = {
  breed: 'German Shepherd',
  shortDesc: 'A loyal and intelligent dog',
  src: 'https://example.com/german-shepherd.jpg',
}

describe('BreedCard.vue', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(BreedCard, {
      props,
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
        mocks,
      },
    })
  })

  it('should render props correctly', () => {
    const breedHeading = wrapper.find('h2')
    expect(breedHeading.text()).toBe(props.breed)

    const shortDesc = wrapper.find('h3')
    expect(shortDesc.text()).toBe(props.shortDesc)

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe(props.src)
    expect(img.attributes('alt')).toBe(`Photo of a ${props.breed}`)

    const routerLink = wrapper.findComponent(RouterLinkStub)
    const expectedPath = `/detail/${props.breed.toLowerCase().replace(/\s+/g, '-')}`
    expect(routerLink.props().to).toBe(expectedPath)
  })

  it('should handle the image loading state correctly', async () => {
    const loadingDiv = wrapper.find('.bg-neutral-300')
    const imageElement = wrapper.find('img')
    expect(loadingDiv.classes('opacity-100')).toBe(true)
    expect(imageElement.classes('opacity-0')).toBe(true)

    // simulate load event
    await imageElement.trigger('load')

    expect(loadingDiv.classes('opacity-0')).toBe(true)
    expect(imageElement.classes('opacity-100')).toBe(true)
  })
})
