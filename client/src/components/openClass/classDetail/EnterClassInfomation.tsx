import tw from 'tailwind-styled-components';
import ImageUploader from '../../../utils/ImageUploader';
import 'react-calendar/dist/Calendar.css';
import MadeCalendar from '../../../utils/Calendar';
import { OneLineTextBox, TextBox } from '../../../utils/TextBox';
import LectureCountInput from '../../../utils/CountInput';
import { OpenButton } from '../OpenButton';
import { FC } from 'react';

const Container = tw.div`
    m-4
    p-4

    bg-signature
`;

const SubTitle = tw.div`
    text-lg
    font-bold
`;

const SelectArea = tw.div`
    mb-8
`;

interface EnterClassInfomationProps {
  nextTab: () => void;
}

const EnterClassInfomation: FC<EnterClassInfomationProps> = ({ nextTab }) => {
  return (
    <>
      <Container>
        <SelectArea>
          <SubTitle>카테고리 선택</SubTitle>
          <form>
            <select name="category" id="category">
              <option value="외식">외식</option>
              <option value="서비스">서비스</option>
              <option value="사무직">사무직</option>
            </select>
          </form>
        </SelectArea>
        <SelectArea>
          <SubTitle>강좌 대표 이미지</SubTitle>
          <ImageUploader />
        </SelectArea>
        <SelectArea>
          <SubTitle>강좌 제목</SubTitle>
          <OneLineTextBox
            maxLength={30}
            placeholder="ex) 강좌 제목을 입력해주세요. (30자 이하)"
          />
        </SelectArea>
        <SelectArea>
          <SubTitle>강좌 소개</SubTitle>
          <TextBox
            maxLength={200}
            placeholder="ex) 강좌의 목적 또는 학습목표의 내용을 간략하게 기재해 다른 사람들에게 소개해보세요! (200자 이하)"
          ></TextBox>
        </SelectArea>
        <SelectArea>
          <SubTitle>학습 대상</SubTitle>
          <OneLineTextBox
            maxLength={30}
            placeholder="ex) 음식을 좋아하는 누구나! (30자 이하)"
          />
        </SelectArea>
        <SelectArea>
          <SubTitle>강좌 날짜 선택</SubTitle>
          <MadeCalendar />
          <LectureCountInput
            labelTitle="강의 회차: "
            labelText="한 주에 실시되는 강좌의 횟수를 알려주세요!"
          />
        </SelectArea>
        <SelectArea>
          <SubTitle>최대 참가자 수</SubTitle>
          <LectureCountInput labelText="강좌에 참가할 수 있는 최대 인원을 설정해쥇요!" />
        </SelectArea>
        <SelectArea>
          <SubTitle>지역</SubTitle>
          <OneLineTextBox placeholder="ex) 경기도 안양시 만안구 삼덕로 37번길 22" />
        </SelectArea>
        <SelectArea>
          <SubTitle>가격</SubTitle>
          <OneLineTextBox placeholder="ex) 15000" />
        </SelectArea>
        <SelectArea>
          <SubTitle>은행</SubTitle>
          <OneLineTextBox placeholder="ex) 은행을 입력해주세요" />
        </SelectArea>
        <SelectArea>
          <SubTitle>예금주</SubTitle>
          <OneLineTextBox placeholder="ex) 신이어" />
        </SelectArea>
        <SelectArea>
          <SubTitle>계좌번호</SubTitle>
          <OneLineTextBox placeholder="ex) '-' 없이 입력해주세요" />
        </SelectArea>
        <OpenButton onClick={() => nextTab()}>다음으로</OpenButton>
      </Container>
    </>
  );
};

export default EnterClassInfomation;