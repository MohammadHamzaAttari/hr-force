# Coach Finder App
## Store management:
There are different ways for store management. We can write a single store file and access the state globaly. In this case, the data duplication may occur and no one have the clue 
in which component, the state is updated in a Real world Large projects. To counter this problem, we use mutations for state updation in such a way that only mutation can update the 
state. For real world projects, writing store module in a single file is not elegant way as we are rushing therefore, we create modules for each feature of our App. For example, in this 
project we created Coaches,Requests modules and manage their states individually.
