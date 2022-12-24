import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Announced } from '@fluentui/react/lib/Announced';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn, IObjectWithKey } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { Stack, Tooltip, TooltipHost } from '@fluentui/react'
import { getDataFromStorage } from '../../IntialData';
// import { initialUserState } from '../helpers/constant';
import { FaUserPlus } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import Form from '../../Form/Form';
// import { PopupModal } from '../components/PopupModal';

initializeIcons();

const classNames = mergeStyleSets({
    fileIconHeaderIcon: {
        padding: 0,
        fontSize: '16px',
    },
    fileIconCell: {
        textAlign: 'center',
        selectors: {
            '&:before': {
                content: '.',
                display: 'inline-block',
                verticalAlign: 'middle',
                height: '100%',
                width: '0px',
                visibility: 'hidden',
            },
        },
    },

    controlWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    exampleToggle: {
        display: 'inline-block',
        marginBottom: '10px',
        marginRight: '30px',
    },
    selectionDetails: {
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '55%'
    },
    iconsStackStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle: {
        margin: '0 0.8rem',
        cursor: 'pointer',
        padding: '5px',
        transition: 'all .5s ease',
        '&:hover': {
            background: '#e5e5e5',
            borderRadius: '50px',
            transform: 'scale(1.1)'
        }
    },
});
const controlStyles = {
    root: {
        marginBottom: '1rem',
        textAlign: 'left',
        maxWidth: '300px',
    },
};
const TableComponentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '80%',
    // height: '50vh',
    boxShadow: '2px 2px 5px #5b5b5b, -2px 5px 5px #5b5b5b',
    padding: '2rem',
    marginTop: '2rem',
    overflowY: 'scroll',
    border: '1px solid gray'
}

export interface IDetailsListDocumentsExampleState {
    columns: IColumn[];
    items: IUser[];
    selectionDetails: string;
    isModalSelection: boolean;
    isCompactMode: boolean;
    announcedMessage?: string;
    modal: boolean;
    currentUser: IUser;
    popUp: boolean,
    selectedUsers: IObjectWithKey[],
    success: boolean
}

const initialUserState = {
    id: 0,
    name: '',
    address: '',
    mail: '',
    number: '',
    gender: '',
    city: '-- Select --',
    permission: false,
    isDeleted: false
}

export interface IUser {
    id: number;
    name: string;
    address: string;
    number: string;
    mail: string;
    gender: string;
    city: string;
    permission: boolean;
    isDeleted: boolean;
}

export class Table extends React.Component<{}, IDetailsListDocumentsExampleState>{
    public _selection: Selection;
    private _allItems: IUser[];

    constructor(props: {}) {
        // const {dark, setDark} = props
        super(props);
        this._allItems = getDataFromStorage();
        this._allItems = this._allItems.reverse();

        const columns: IColumn[] = [
            {
                key: 'Id',
                name: 'Id',
                fieldName: 'Id',
                minWidth: 20,
                maxWidth: 20,
                isRowHeader: true,
                isResizable: true,
                isSorted: false,
                isSortedDescending: true,
                sortAscendingAriaLabel: 'Sorted A to Z',
                sortDescendingAriaLabel: 'Sorted Z to A',
                onColumnClick: this._onColumnClick,
                data: 'number',
                onRender: (item: IUser) => {
                    return <span>{item.id}</span>;
                },
                isPadded: true,
            },
            {
                key: 'Name',
                name: 'Name',
                fieldName: 'name',
                minWidth: 50,
                maxWidth: 100,
                isRowHeader: true,
                isResizable: true,
                isSorted: false,
                isSortedDescending: false,
                sortAscendingAriaLabel: 'Sorted A to Z',
                sortDescendingAriaLabel: 'Sorted Z to A',
                onColumnClick: this._onColumnClick,
                data: 'string',
                onRender: (item: IUser) => {
                    return <span>{item.name}</span>;
                },
                isPadded: true,
            },
            {
                key: 'Address',
                name: 'Address',
                fieldName: 'Address',
                minWidth: 100,
                maxWidth: 300,
                isResizable: true,
                onColumnClick: this._onColumnClick,
                data: 'string',
                onRender: (item: IUser) => {
                    return <span>{item.address}</span>;
                },
                isPadded: true,
            },
            {
                key: 'Mobile',
                name: 'Mobile',
                fieldName: 'Mobile',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onColumnClick: this._onColumnClick,
                onRender: (item: IUser) => {
                    return <span>{item.number}</span>;
                },
                isPadded: true,
            },
            {
                key: 'Email',
                name: 'Email',
                fieldName: 'Email',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onColumnClick: this._onColumnClick,
                onRender: (item: IUser) => {
                    return <span>{item.mail}</span>;
                },
            },
            {
                key: 'Gender',
                name: 'Gender',
                fieldName: 'Gender',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onColumnClick: this._onColumnClick,
                onRender: (item: IUser) => {
                    return <span>{item.gender}</span>;
                }
            },
            {
                key: 'City',
                name: 'City',
                fieldName: 'City',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onColumnClick: this._onColumnClick,
                onRender: (item: IUser) => {
                    return <span>{item.city}</span>;
                },
            }
        ];

        this._selection = new Selection({
            onSelectionChanged: () => {
                this.setState({
                    selectionDetails: this._getSelectionDetails(),
                });
            },
        });

        this.state = {
            items: this._allItems,
            columns: columns,
            selectionDetails: this._getSelectionDetails(),
            isModalSelection: true,
            isCompactMode: true,
            announcedMessage: undefined,
            modal: false,
            currentUser: initialUserState,
            popUp: false,
            selectedUsers: this._selection.getSelection(),
            success: false,
        };
    }

    _openModal = () => {
        console.log('open run')
        this.setState({
            modal: true
        })
    }
    closeModal = () => {
        console.log('close run')
        this.setState({
            modal: false,
            // currentUser: initialUserState
        })
    }


    _getSelectedUser() {
        const selectedUser = this._selection.getSelection()[0] as IUser;
        this.setState({
            currentUser: selectedUser,
            modal: true
        })
    }
    _getSelectedUsers() {
        const currentSelection = this._selection.getSelection();
        this.setState({
            popUp: true,
            selectedUsers: currentSelection
        })
    }
    setUpdatedUsers(arr: IUser[]) {
        this.setState({
            items: arr,
        })
        console.log(this.state.items)
    }

    public render() {
        const { columns, isCompactMode, items, selectionDetails, isModalSelection, announcedMessage, modal, popUp, success } = this.state;

        return (
            <>
                <div style={TableComponentStyle}>
                    <div className={classNames.controlWrapper}>
                        <TextField label="Search" onChange={this._onChangeText} styles={controlStyles} />
                        <Announced message={`Number of items after filter applied: ${items.length}.`} />
                        <TooltipHost content="Add user" id='addUser'>
                            <FaUserPlus size={24} style={{ margin: '0 1rem', cursor: 'pointer' }} onClick={this._openModal} />
                        </TooltipHost>
                    </div>
                    <div className={classNames.selectionDetails}>
                        <Stack className={classNames.iconsStackStyle}>
                            {this._selection.count > 0 &&
                                <TooltipHost content="Delete" id={'delete'}>
                                    <MdDelete size={20} className={classNames.iconStyle} onClick={() => this._getSelectedUsers()} />
                                </TooltipHost>
                            }
                            {this._selection.count === 1 &&
                                <TooltipHost content="Edit" id={'Edit'}>
                                    <MdEdit size={20} className={classNames.iconStyle} onClick={() => this._getSelectedUser()} />
                                </TooltipHost>
                            }
                        </Stack>
                        {selectionDetails}
                    </div>
                    <Announced message={selectionDetails} />
                    {announcedMessage ? <Announced message={announcedMessage} /> : undefined}
                    {isModalSelection ? (
                        <MarqueeSelection selection={this._selection}>
                            <DetailsList
                                items={items}
                                compact={isCompactMode}
                                columns={columns}
                                selectionMode={SelectionMode.multiple}
                                getKey={this._getKey}
                                setKey="multiple"
                                layoutMode={DetailsListLayoutMode.justified}
                                isHeaderVisible={true}
                                selection={this._selection}
                                selectionPreservedOnEmptyClick={true}
                                // onItemInvoked={this._onItemInvoked}
                                enterModalSelectionOnTouch={true}
                                ariaLabelForSelectionColumn="Toggle selection"
                                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                                checkButtonAriaLabel="select row"
                            />
                        </MarqueeSelection>
                    ) : (
                        <DetailsList
                            items={items}
                            compact={isCompactMode}
                            columns={columns}
                            selectionMode={SelectionMode.none}
                            getKey={this._getKey}
                            setKey="none"
                            layoutMode={DetailsListLayoutMode.justified}
                            isHeaderVisible={true}
                        // onItemInvoked={this._onItemInvoked}
                        />
                    )}
                </div>

                <Form editid={0}/>

                {/* {modal && <Form closeModal={this.closeModal} currentUser={this.state.currentUser} setUpdatedUsers={this.setUpdatedUsers.bind(this)} />} */}
            </>
        )
    }

    public componentDidUpdate(previousProps: any, previousState: IDetailsListDocumentsExampleState) {
        if (previousState.isModalSelection !== this.state.isModalSelection && !this.state.isModalSelection) {
            this._selection.setAllSelected(false);
        }
    }

    private _getKey(item: any, index?: number): string {
        return item.key;
    }

    private _onChangeText = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string | undefined): void => {
        console.log(text)
        this.setState({
            items: text ? this._allItems.filter(i => i.name.toLowerCase().indexOf(text) > -1 || i.address.toLowerCase().indexOf(text) > -1 || i.mail.toLowerCase().indexOf(text) > -1 || i.city.toLocaleLowerCase().indexOf(text) > -1 || i.gender.toLowerCase().indexOf(text) > -1 || i.number.toLowerCase().indexOf(text) > -1) : this._allItems
        });
    };

    // private _onItemInvoked(item: any): void {
    //   alert(`Item invoked: ${item.name}`);
    // }

    private _getSelectionDetails(): string {
        const selectionCount = this._selection.getSelectedCount();
        switch (selectionCount) {
            case 0:
                return '';
            case 1:
                return '1 item selected: ' + (this._selection.getSelection()[0] as IUser).name;
            default:
                return `${selectionCount} items selected`;
        }
    }

    private _onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
        const { columns, items } = this.state;
        const newColumns: IColumn[] = columns.slice();
        const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
        newColumns.forEach((newCol: IColumn) => {
            if (newCol === currColumn) {
                currColumn.isSortedDescending = !currColumn.isSortedDescending;
                currColumn.isSorted = true;
                this.setState({
                    announcedMessage: `${currColumn.name} is sorted ${currColumn.isSortedDescending ? 'descending' : 'ascending'
                        }`,
                });
            } else {
                newCol.isSorted = false;
                newCol.isSortedDescending = true;
            }
        });
        const newItems = _copyAndSort(items, currColumn.fieldName!, currColumn.isSortedDescending);
        this.setState({
            columns: newColumns,
            items: newItems,
        });
    };
}

function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
    const key = columnKey as keyof T;
    return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}