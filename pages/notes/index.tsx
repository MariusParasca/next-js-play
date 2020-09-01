import Link from 'next/link';
import { Typography, TableContainer, TableBody, Table, TableRow, TableCell } from '@material-ui/core';
import { NoteItem } from '../api/NoteItem';

const notesDB: NoteItem[] = [{ name: 'my-note' }, { name: 'my-note-2' }, { name: 'my-note-3' }];

export interface NotesProps {
  notes?: NoteItem[],
}

export default function Notes({notes}: NotesProps) {
  return (
    <div>
      <Typography variant="h2">Notes Page</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {notes?.map((note) => (
              <TableRow key={note.name}>
                <TableCell>
                  <Link as={`/notes/${note.name}`} href="/notes/[note]">
                    <a>{note.name}</a>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

Notes.getInitialProps = async () => {
  // make request here and pass response as props
  return {notes: notesDB}
};
