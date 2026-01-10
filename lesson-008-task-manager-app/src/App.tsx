// import {useEffect, useState} from 'react';
//
// export function App() {
//     const trellyAPIkey = '34ba8abb-f37c-46d9-9a4f-8f6b36b1b225'
//
//     const [tasks, setTasks] = useState(null);
//     const [boardId, setBoardId] = useState(null)
//     const [selectedTaskId, setSelectedTaskId] = useState(null);
//     const [selectedTask, setSelectedTask] = useState(null);
//
//     useEffect(() => {
//         fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
//             headers: {
//                 'api-key': trellyAPIkey
//             }
//         }).then(res => res.json())
//             .then(json => setTasks(json.data));
//     }, []);
//
//     useEffect(() => {
//         if (!boardId && !selectedTaskId) {
//             return;
//         }
//
//         fetch('https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + selectedTaskId, {
//             headers: {
//                 'api-key': trellyAPIkey
//             }
//         }).then(res => res.json())
//             .then(json => setSelectedTask(json.data));
//     }, [selectedTaskId])
//
//     if (tasks === null)
//         return <h1>Загрузка...</h1>;
//
//     if (tasks.length === 0)
//         return <h1>Задачи отсутствуют</h1>;
//
//     return <div>
//         <button onClick={() => {
//             setSelectedTaskId(null);
//             setSelectedTask(null);
//         }}>Сбросить выделение
//         </button>
//
//         <div style={{
//             display: 'flex',
//             gap: '44px',
//         }}>
//             <div>
//                 {tasks.map((task, index) => {
//                     return (
//                         <div key={index} style={{
//                             border: task.id === selectedTaskId ? '8px solid blue' : '8px solid black',
//                             marginBottom: '10px',
//                             width: '100%',
//                             backgroundColor:
//                                 task.attributes.priority === 0 ? '#ffffff' :
//                                     task.attributes.priority === 1 ? '#ffd7b5' :
//                                         task.attributes.priority === 2 ? '#ffb38a' :
//                                             task.attributes.priority === 3 ? '#ff9248' :
//                                                 task.attributes.priority === 4 ? '#ff6700' : 'white'
//                         }}>
//
//                             <div style={{
//                                 marginLeft: '10px',
//                                 fontSize: '20px'
//                             }}
//
//                                  onClick={() => {
//                                      setSelectedTaskId(task.id);
//                                      setBoardId(task.attributes.boardId);
//                                  }}>
//                                 <p style={{
//                                     textDecoration: task.attributes.status === 2 ? 'line-through' : 'none'
//                                 }}
//                                 ><strong>Заголовок:</strong> {task.attributes.title} </p>
//
//                                 <div> Статус:
//                                     <input
//                                         type="checkbox"
//                                         defaultChecked={task.attributes.status === 2}
//                                     />
//                                 </div>
//
//                                 <p>
//                                     <b>Дата создания
//                                         задачи</b>: {new Date(task.attributes.addedAt).toLocaleDateString()}
//                                 </p>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//
//             <div
//                 style={{
//                     border: '8px solid black',
//                     height: '497px',
//                     width: '20%'
//                 }}>
//                 <div style={{
//                     marginLeft: '15px',
//                 }}>
//                     <h2>Task details</h2>
//                     <div>{
//                         selectedTaskId && (!selectedTask || selectedTask.id !== selectedTaskId)
//                             ? 'loading...'
//                             : selectedTask === null
//                                 ? 'Task is not selected'
//                                 : <div>
//                                     <p>title - {selectedTask.attributes.title  ?? 'no title'}</p>
//                                     <p>boardTitle - {selectedTask.attributes.boardTitle ?? 'no boardTitle'}</p>
//                                     <p>description - {selectedTask.attributes.description ?? 'no description'}</p>
//                                 </div>
//                     }</div>
//                 </div>
//             </div>
//
//         </div>
//     </div>;
// }