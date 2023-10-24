import { FC } from 'react';
import tw from 'tailwind-styled-components';

const Container = tw.div`
    m-4
    p-4

    bg-signature
`;

const InfomationBox = tw.div`
    p-4
    border-2

    bg-white
`;

interface GuideProps {
  activeTab: number;
}

const Guide: FC<GuideProps> = ({ activeTab }) => {
  const ContentArray = [
    '기본정보입력란에서는 개설하시고자 하는 강좌의 제목, 카테고리(외식, 운전, 서비스, 사무직), 강좌목적, 날짜선택 등 강좌의 핵심 정보를 입력해주세요!',
    '강좌상세내용 입력란에서는 주차별 수업 목표와 내용(학습계획, 강의주제, 사용교재) 등을 상세히 작성할 수 있고 필요한 만큼 주차별 입력란을 만들어 사용할 수 있고 마지막으로 강의가 종료될때 수강생의 수료기준을 설정할수 있습니다.',
    '개설정보확인란에서는 입력된 모든 강좌개설정보를 검토하고 문제가 없을시 강좌개설 버튼을 눌러 강좌를 개설할 수 있습니다. 수정하고 싶은 문제가 있을 시 “이전단계” 버튼을 눌러 뒤로 돌아가 임시 저장 되있는 정보를 수정하실 수 있습니다.',
  ];

  return (
    <Container>
      <InfomationBox>{ContentArray[activeTab]}</InfomationBox>
    </Container>
  );
};

export default Guide;
