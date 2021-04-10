import tw, { styled, css } from "twin.macro";

export const Container = styled.div(() => [
  tw`flex items-center rounded-lg bg-white shadow-lg overflow-hidden`,

  css`
    & > img {
      ${tw`h-32 w-32 flex-shrink-0 object-cover object-bottom`}
    }
  `,
]);

export const CardBody = styled.div(() => [
  tw`px-6 py-4`,

  css`
    & {
      h3 {
        ${tw`text-lg font-semibold text-gray-800`}
      }
      p {
        ${tw`text-gray-600`}
      }

      div {
        ${tw`mt-4`}

        a {
          ${tw`text-brand-dark hover:text-brand font-semibold text-sm`}
        }
      }
    }
  `,
]);
