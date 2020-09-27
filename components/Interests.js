import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Typewriter from "typewriter-effect";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getListStyle = (isDraggingOver, theme) => ({
  background: isDraggingOver ? "hotpink" : theme,
  borderRadius: 10,
  padding: 8,
  width: 250,
});

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  color: "#3b0114",
  fontSize: "0.3em",
  borderRadius: 10,
  userSelect: "none",
  padding: 16,
  margin: `0 0 8px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "pink",

  // styles we need to apply on draggables
  ...draggableStyle,
});

export default class Interests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [
        { id: 0, interest: "Marketing" },
        { id: 1, interest: "Art & Design" },
        { id: 2, interest: "Knitting" },
        { id: 3, interest: "TypeScript" },
        { id: 4, interest: "Japanese" },
        { id: 5, interest: "SEO" },
        { id: 6, interest: "Anime" },
        { id: 7, interest: "Cats" },
      ],
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.checkJam = this.checkJam.bind(this);
  }
  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const interests = reorder(
      this.state.interests,
      result.source.index,
      result.destination.index
    );

    this.setState({
      interests,
    });
  }

  checkJam(jam) {
    return jam.toLowerCase() === "jamstack";
  }

  render() {
    return (
      <div>
        <span className="interest-div">
          <p
            title="Rearrange to reveal another interest of mine"
            className="small"
          >
            Rearrange to reveal another interest of mine
          </p>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={getListStyle(
                    snapshot.isDraggingOver,
                    this.props.theme
                  )}
                >
                  {this.state.interests.map((interest, index) => (
                    <Draggable
                      key={interest.id}
                      draggableId={`${interest.id}`}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          title={interest.interest}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <Typewriter
                            options={{
                              autoStart: true,
                              loop: false,
                            }}
                            onInit={(typewriter) => {
                              typewriter
                                .changeCursor(" ")
                                .typeString(`${interest.interest}`)
                                .start();
                            }}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <p title="Hint" className="small left">
            <b>HINT</b>: traffic damn
          </p>
        </span>
        <style jsx>
          {`
            .interest-div {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              // border: 1px red solid;
            }
            .small {
              font-size: 0.2em;
            }
          `}
        </style>
      </div>
    );
  }
}
