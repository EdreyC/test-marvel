import { NextPage } from "next";
import { useRouter } from "next/router";
import { useMarvel } from "../../hooks/useMarvel";
import { Card, CardContent, Container, Description, List, Thumb, Title } from "./styles";



const Characters: NextPage = () => {
  const {chars} = useMarvel()

    return(
        <Container>
        <Title>Personagens Marvel</Title>
        <List>
        {
          chars.map(chars=>{
            return(
              <Card>
                <Thumb src={`${chars.thumbnail.path}.${chars.thumbnail.extension}`} alt="" />
                <CardContent>
                    <Title>{chars.name}</Title>
                      {chars.description == '' ? "Sem Informações :(" : <Description>{chars.description}
                      </Description>}

                      <Title>Series</Title>

                      { chars.series.items.slice(0,3).map(item => {
                          return (
                            <p>{item.name}</p>
                   
                        )
                      })}
                      <Title>Stories</Title>

                       {chars.stories.items.slice(0,3).map(item => {
                          return (
                    
                            <p>{item.name}</p>
                     
                        )
                      })}   

                </CardContent>
              </Card>
            )
          })
        }
        </List>
          
      </Container>
    )
    
}

export default Characters