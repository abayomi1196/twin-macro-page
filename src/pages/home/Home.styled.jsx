import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5`,
]);

export const HeroContainer = styled.div(() => [
  tw`px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:(px-12 py-24 max-w-full) xl:mr-0 2xl:col-span-2`,
]);

export const HeroInner = styled.div(() => [
  tw`xl:max-w-xl`,

  css`
    & {
      img {
        &:first-of-type {
          ${tw`h-10`}
        }

        &:not(:first-of-type) {
          ${tw`block mt-6 rounded-lg shadow-xl sm:(mt-8 w-full object-cover) object-center lg:hidden`}
        }
      }
    }
  `,
]);

export const Title = styled.h1(() => [
  tw`mt-6 text-2xl font-headline tracking-tighter font-semibold text-gray-900 sm:(mt-8 text-4xl) lg:(text-3xl tracking-tight) xl:text-4xl`,

  css`
    & {
      span {
        ${tw`text-brand`}
      }
    }
  `,
]);

export const SubTitle = styled.p(() => [
  tw`mt-2 text-gray-600 sm:(mt-4 text-xl)`,
]);

export const BtnWrapper = styled.div(() => [tw`mt-4 sm:mt-6 space-x-2`]);

export const LgImageWrapper = styled.div(() => [
  tw`hidden lg:block relative 2xl:col-span-3 overflow-hidden`,

  css`
    & > img {
      ${tw`absolute inset-0 w-full h-full object-cover object-center`}
    }
  `,
]);

export const DestinationsWrapper = styled.div(() => [
  tw`max-w-md sm:max-w-xl mx-auto px-8 mt-6 lg:(max-w-6xl px-12)`,

  css`
    & > {
      h2 {
        ${tw`text-xl text-gray-900`}
      }

      p {
        ${tw`mt-2 text-gray-600`}
      }

      div {
        ${tw`my-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3`}
      }
    }
  `,
]);
