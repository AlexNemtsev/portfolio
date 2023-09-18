import { FlexWrapper } from './FlexWrapper';

export const Form = () => {
  return (
    <FlexWrapper as="form" $direction="column" $align="center">
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Message
        <textarea></textarea>
      </label>
      <input type="submit" value="submit" />
    </FlexWrapper>
  );
};
