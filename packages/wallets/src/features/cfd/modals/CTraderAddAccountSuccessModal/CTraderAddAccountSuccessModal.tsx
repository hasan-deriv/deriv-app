import React from 'react';
import { ModalWrapper, WalletButton, WalletButtonGroup, WalletsActionScreen } from '../../../../components';
import SuccessIcon from './SuccessIcon';
import './CTraderAddAccountSuccessModal.scss';

const CTraderAddAccountSuccessModal = () => {
    return (
        <ModalWrapper>
            <div className='wallets-ctrader-account-add-success-modal'>
                <WalletsActionScreen
                    description='Congratulations, you have successfully created your real Deriv cTrader account. To start trading,transfer funds from your Deriv account into this account.'
                    descriptionSize='sm'
                    icon={<SuccessIcon />}
                    renderButtons={() => (
                        <WalletButtonGroup>
                            <WalletButton size='lg' variant='outlined'>
                                Maybe later
                            </WalletButton>
                            <WalletButton size='lg' variant='contained'>
                                Transfer now
                            </WalletButton>
                        </WalletButtonGroup>
                    )}
                    title='Success!'
                />
            </div>
        </ModalWrapper>
    );
};

export default CTraderAddAccountSuccessModal;
