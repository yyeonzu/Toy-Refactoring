import styled from 'styled-components';
import {useRef} from 'react';
import {ReactComponent as AddPhotoBtn} from '../../assets/images/Detail/photo.svg';
import {ReactComponent as DeleteBtn} from '../../assets/images/Detail/icon _close_.svg';

const FileUpload = ({file, setFile, postFile, setPostFile}) => {
  const fileUpload = useRef();

  // 업로드 버튼 클릭
  const handleUploadClick = () => {
    if (file.length < 4) {
      fileUpload.current.click();
    } else {
      alert('사진은 4장까지 첨부할 수 있습니다.');
    }
  };

  // 업로드 파일 저장
  const handleUpload = (e) => {
    // 파일 저장
    const {files} = e.target;
    setPostFile(Array.from(files));

    // 미리보기 저장
    const uploadFile = files;
    const temp = [];
    const final = uploadFile.length > 4 ? Array.from(uploadFile).slice(0, 4) : uploadFile;

    for (let i = 0; i < final.length; i++) {
      let img = window.URL.createObjectURL(uploadFile[i]);
      temp[i] = img;
    }
    setFile(temp);
  };

  // 업로드 파일 삭제
  const handleFileDelete = (e) => {
    setFile(file && file.filter((it) => it !== file[e.target.id]));
    setPostFile(postFile && postFile.filter((it) => it !== postFile[e.target.id]));
  };

  return (
    <Flex>
      <AddPhoto>
        <Empha01>사진 추가</Empha01>
        <AddPhotoBtn onClick={handleUploadClick} style={{cursor: 'pointer'}} />
        <FileInput type="file" multiple={true} value="" ref={fileUpload} onChange={handleUpload} />
      </AddPhoto>
      <UploadedFiles>
        {file &&
          file.map((it, idx) => (
            <div id={idx} key={idx} style={{position: 'relative'}}>
              <FileLoader key={idx} src={it} alt="img" />
              <FileDeleteBtn id={idx} className="delete" onClick={handleFileDelete} />
            </div>
          ))}
      </UploadedFiles>
    </Flex>
  );
};

export default FileUpload;

const Flex = styled.div`
  display: flex;
`;

const AddPhoto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 18px;
`;

const Empha01 = styled.label`
  display: flex;
  align-items: center;
  height: 31px;
  color: var(---, #010101);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const FileInput = styled.input`
  display: none;
`;

const FileDeleteBtn = styled(DeleteBtn)`
  position: absolute;
  top: -20px;
  right: 0;
  cursor: pointer;
`;

const FileLoader = styled.img`
  width: 216px;
  height: 216px;
`;

const UploadedFiles = styled.div`
  display: flex;
  gap: 20px;
  align-items: end;
  margin: 53px 0 0 40px;
`;
