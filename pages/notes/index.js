import Link from 'next/link';
import { Typography, TableContainer, TableBody, Table, TableRow, TableCell } from '@material-ui/core';

const notes = [{ name: 'my-note' }, { name: 'my-note-2' }, { name: 'my-note-3' }];

export default function Notes() {
  return (
    <div>
      <Typography variant="h2">Notes Page</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {notes.map((note) => (
              <TableRow>
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
