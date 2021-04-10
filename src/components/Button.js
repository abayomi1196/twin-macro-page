import tw, { styled } from "twin.macro";

const Button = styled.a(({ variant }) => [
  tw`shadow-lg inline-block px-5 py-3 rounded-lg uppercase tracking-wider font-semibold text-sm md:text-base focus:(outline-none ring ring-offset-1) cursor-pointer`,

  variant === "primary" &&
    tw`bg-brand hover:bg-brand-light focus:(ring-brand-dark ring-opacity-50) active:bg-brand-dark text-white hover:-translate-y-0.5 transform transition`,

  variant === "secondary" &&
    tw`bg-gray-300 hover:bg-gray-200 focus:(ring-gray-300 ring-opacity-50) active:(bg-gray-400 text-white) text-gray-400`,
]);

export default Button;
