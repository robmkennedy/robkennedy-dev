import Note from 'model/Note';
import './NoteItem.scss';

type NoteItemProps = {
    note: Note
};

const NoteItem = ({ note }: NoteItemProps) => {

    const answerItems = note.answers.map((answer, index) => {
        return <li key={index}>{answer}</li>;
    });

    return (
        <div className='rk-note-item'>
            <div className='rk-note-question'>{note.question}</div>
            <ul>
                <div>{answerItems}</div>
            </ul>
        </div>
    );
}

export default NoteItem;