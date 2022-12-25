import * as React from "react";
import { mergeStyleSets, DefaultButton, PrimaryButton, FocusTrapZone, Layer, Overlay, Popup, IObjectWithKey } from "@fluentui/react";
import { ISelection, Selection } from "@fluentui/react";
import { IUser } from "../UserDetails/Table/Table";

const popupStyles = mergeStyleSets({
    root: {
        background: 'rgba(0, 0, 0, 0.2)',
        bottom: '0',
        left: '0',
        position: 'fixed',
        right: '0',
        top: '0',
    },
    content: {
        background: 'white',
        left: '50%',
        maxWidth: '400px',
        padding: '0 2em 2em',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
});

type PopupProps = {
    selectedUsers: IObjectWithKey[],
    closePopup: Function,
    setUpdatedUsers: Function,
    items: IUser[],
}

export const PopupModal = (props: PopupProps) => {
    const { selectedUsers, closePopup, setUpdatedUsers, items } = props;

    const handleDelete = () => {
        // let updatedList: IUser[] = [];
        // for(let i=0; i < selectedUsers.length; i++ ){
        //   for(let j=0;  j <items.length; j++){
        //     if(items[j].Id !== (selectedUsers as IUser[])[i].Id){
        //       // console.log(items[j])
        //       updatedList.push(items[j])
        //     }
        //   }
        // }
        let selectedRows = selectedUsers as IUser[];
        let deletedUsers = selectedRows.map((user) => {
            user.isDeleted = true;
            return user
        })
        let updatedList = items.filter((user) => user.isDeleted !== true);
        setUpdatedUsers(updatedList);
        closePopup()
        // })
    }
    return (
        <>
            <Layer>
                <Popup
                    className={popupStyles.root}
                    role="dialog"
                    aria-modal="true"
                    onDismiss={() => closePopup()}
                // enableAriaHiddenSiblings={true}
                >
                    <Overlay onClick={() => closePopup()} />
                    <FocusTrapZone>
                        <div role="document" className={popupStyles.content}>
                            <h2 style={{ textAlign: 'center' }}>Are you Sure?</h2>
                            <p>
                                {selectedUsers.length === 1 ? `Do you want to delete user ${(selectedUsers[0] as IUser).name}` : `
                  Do you want to delete ${selectedUsers.length} users`}

                            </p>
                            <PrimaryButton style={{ marginRight: '1rem' }} onClick={handleDelete}>Delete</PrimaryButton>
                            <DefaultButton onClick={() => closePopup()}>Cancel</DefaultButton>
                        </div>
                    </FocusTrapZone>
                </Popup>
            </Layer>
        </>
    )
}
