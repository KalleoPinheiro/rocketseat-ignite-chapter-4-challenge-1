import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { BannerProps } from '.'

type WrapperProps = Pick<BannerProps, 'srcImg'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ srcImg }) => css`
    display: flex;
    justify-content: space-between;
    background-image: url(${srcImg});
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 335px;
  `}
`
