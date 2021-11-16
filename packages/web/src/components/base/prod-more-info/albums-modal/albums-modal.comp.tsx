// pkgs:

// utils:
import './style.sass';
import { useState, useEffect } from 'react';
import { BiStoreAlt } from 'react-icons/bi';
import { useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import AppButton from '../../../distributed/button/app-button.comp';
import Modal from '../../../distributed/modal/modal.comp';

// comps:

// component>>>
const AlbumsModal: React.VFC<any> = ({ isModalOpen, setIsModalOpen }) => {
  const [currentProdImg, setCurrentProdImg] = useState<string | undefined>(undefined);
  const [currAlbumsWrapper, setCurrAlbumsWrapper] = useState<string>(`companyWrapper`);
  const [currentCompanyImg, setCurrentCompanyImg] = useState<string | undefined>(undefined);

  const { stage: userStage, userData } = useAppSelector((state: RootState) => state.UserActions);
  const { stage: prodStage, prod } = useAppSelector((state: RootState) => state.SingleProd);

  const albumsTabs = [
    { value: 'Company Images', contentName: 'companyWrapper' },
    { value: 'Product Images', contentName: 'prodWrapper' },
  ];

  useEffect(() => {
    setCurrentProdImg(prod?.cover);
    if (userData?.images) setCurrentCompanyImg(userData?.images[0]);
    return () => {
      setCurrentProdImg(prod?.cover);
      if (userData?.images) setCurrentCompanyImg(userData?.images[0]);
    };
  }, [prod?.cover, userData?.images]);

  return (
    <Modal xl state={isModalOpen} setState={setIsModalOpen}>
      <article className="albums-modal">
        <header className="modal-header">
          <section className="tabs-wrapper">
            {albumsTabs.map(({ value, contentName }): JSX.Element => {
              const tabStyle = { color: `#1a1a1a`, border: `3px solid #1a1a1a` };
              const activeTabStyle = currAlbumsWrapper === contentName ? tabStyle : {};
              return (
                <button style={activeTabStyle} onClick={() => setCurrAlbumsWrapper(contentName)}>
                  {value}
                </button>
              );
            })}
          </section>
          <section className="open-company-website">
            <AppButton
              value="Open Company Website"
              type="button"
              bkgSecondary
              wide
              size="sm"
              border={{ size: 1 }}
              noBorder
              icon={<BiStoreAlt />}
              isIconBefore={false}
              path={`/suppler/${userData?._id}`}
            />
          </section>
        </header>
        <article className="albums-wrapper">
          {currAlbumsWrapper === `prodWrapper` ? (
            <section className="wrapper">
              <section
                className="content"
                style={{ background: `url(${currentProdImg}) center/contain no-repeat` }}
              ></section>
              <aside className="navigators">
                <section className="imgs-pickers">
                  {prod?.images?.map(
                    (img): JSX.Element => (
                      <button
                        className="img-picker"
                        onClick={() => setCurrentProdImg(img)}
                        style={{
                          background: `url(${img}) center/contain no-repeat`,
                          boxShadow: `${img === currentProdImg ? `0 0 1px 2px #5624d0a9` : ''}`,
                        }}
                      ></button>
                    )
                  )}
                </section>
              </aside>
            </section>
          ) : (
            <section className="wrapper">
              <section
                className="content"
                style={{ background: `url(${currentCompanyImg}) center/contain no-repeat` }}
              ></section>
              <aside className="navigators">
                <section className="imgs-pickers">
                  {userData?.images?.map(
                    (img): JSX.Element => (
                      <button
                        className="img-picker"
                        onClick={() => setCurrentCompanyImg(img)}
                        style={{
                          background: `url(${img}) center/contain no-repeat`,
                          boxShadow: `${img === currentCompanyImg ? `0 0 1px 2px #5624d0a9` : ''}`,
                        }}
                      ></button>
                    )
                  )}
                </section>
              </aside>
            </section>
          )}
        </article>
      </article>
    </Modal>
  );
};

export default AlbumsModal;
